import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type EmailFieldValue = string | number | boolean | null | undefined;

type SendNotificationEmailInput = {
  subject: string;
  formName: string;
  fields: Record<string, EmailFieldValue>;
  source?: string;
  replyTo?: string;
  /** Optional: override the timestamp used in the email (useful for testing) */
  submittedAt?: Date;
};

type SendNotificationEmailResult =
  | { success: true; notificationId?: string; confirmationId?: string }
  | { success: false; error: string; notificationId?: string };

// ---------------------------------------------------------------------------
// Brand & company constants
// ---------------------------------------------------------------------------

const brand = {
  name: "Countify UAE",
  website: "https://www.countify.ae",
  logoUrl: "https://www.countify.ae/images/countify-logo-light.png",
  email: "info@countify.ae",
  phone: "+971 58 511 7901",
  whatsappUrl: "https://wa.me/971585117901",
  primary: "#0a112d",
  blue: "#1a3a8f",
  gold: "#dca958",
  ink: "#172033",
  muted: "#667085",
  border: "#e6e9f0",
  soft: "#f5f7fb",
} as const;

const companyDetails = {
  uaeOffice: [
    "Meydan Grandstand, 6th floor",
    "Meydan Road, Nad Al Sheba",
    "Dubai, U.A.E.",
  ],
  ukOffice: [
    "3rd Floor, St. Georges Building",
    "5 St. Vincent Place",
    "Glasgow, G1 2DH",
  ],
} as const;

// ---------------------------------------------------------------------------
// Limits
// ---------------------------------------------------------------------------

/** Maximum number of fields rendered in an email to guard against oversized payloads. */
const MAX_FIELD_COUNT = 50;
/** Maximum character length for any single field value. */
const MAX_FIELD_VALUE_LENGTH = 2_000;

// ---------------------------------------------------------------------------
// Environment / configuration
// ---------------------------------------------------------------------------

const requiredEnvVars = [
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "RESEND_TO_EMAIL",
] as const;

type RequiredEnvVar = (typeof requiredEnvVars)[number];

function readEnvValue(key: RequiredEnvVar): string {
  const rawValue = process.env[key];
  if (!rawValue) return "";

  let value = rawValue.trim();

  // Strip accidental "KEY=value" prefix (copy-paste from .env files)
  if (value.startsWith(`${key}=`)) {
    value = value.slice(key.length + 1).trim();
  }

  // Strip surrounding quotes
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1).trim();
  }

  return value;
}

type EmailConfig =
  | { success: true; apiKey: string; from: string; to: string }
  | { success: false; error: string };

function getEmailConfig(): EmailConfig {
  const env = {
    RESEND_API_KEY: readEnvValue("RESEND_API_KEY"),
    RESEND_FROM_EMAIL: readEnvValue("RESEND_FROM_EMAIL"),
    RESEND_TO_EMAIL: readEnvValue("RESEND_TO_EMAIL"),
  } satisfies Record<RequiredEnvVar, string>;

  const missing = requiredEnvVars.filter((key) => !env[key]);
  if (missing.length > 0) {
    return {
      success: false,
      error: `Missing email environment variables: ${missing.join(", ")}`,
    };
  }

  if (
    !env.RESEND_API_KEY.startsWith("re_") ||
    env.RESEND_API_KEY.includes("dummy_api_key_replace_me")
  ) {
    return {
      success: false,
      // Deliberately vague — never log the raw key value
      error: "RESEND_API_KEY appears to be invalid or a placeholder.",
    };
  }

  return {
    success: true,
    apiKey: env.RESEND_API_KEY,
    from: env.RESEND_FROM_EMAIL,
    to: env.RESEND_TO_EMAIL,
  };
}

// ---------------------------------------------------------------------------
// Field normalisation & sanitisation
// ---------------------------------------------------------------------------

/**
 * Resolve the submitter's name from the fields map in a key-casing-agnostic
 * way so that "name", "Name", "Full Name", "full_name" all work correctly.
 */
function resolveSubmitterName(
  fields: Record<string, EmailFieldValue>
): string {
  const candidates = ["Name", "name", "Full Name", "full_name", "fullName"];
  for (const key of candidates) {
    const value = fields[key];
    if (value !== null && value !== undefined && String(value).trim() !== "") {
      return String(value).trim();
    }
  }
  return "there";
}

/**
 * Sanitise the fields map:
 *  - Cap the number of fields to MAX_FIELD_COUNT.
 *  - Truncate oversized values to MAX_FIELD_VALUE_LENGTH.
 */
function sanitiseFields(
  fields: Record<string, EmailFieldValue>
): Record<string, EmailFieldValue> {
  const entries = Object.entries(fields).slice(0, MAX_FIELD_COUNT);
  return Object.fromEntries(
    entries.map(([key, value]) => {
      if (typeof value === "string" && value.length > MAX_FIELD_VALUE_LENGTH) {
        return [key, value.slice(0, MAX_FIELD_VALUE_LENGTH) + "… [truncated]"];
      }
      return [key, value];
    })
  );
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

function formatFieldValue(value: EmailFieldValue): string {
  if (value === null || value === undefined || value === "") {
    return "Not provided";
  }
  return String(value);
}

function escapeHtml(value: EmailFieldValue): string {
  return formatFieldValue(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value: string): string {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function formatSubmittedAt(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Dubai",
  }).format(date);
}

// ---------------------------------------------------------------------------
// HTML building blocks
// ---------------------------------------------------------------------------

function renderFieldRows(fields: Record<string, EmailFieldValue>): string {
  return Object.entries(fields)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid ${brand.border}; color: ${brand.muted}; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: .04em; width: 34%; vertical-align: top;">
            ${escapeHtml(label)}
          </td>
          <td style="padding: 12px 0 12px 18px; border-bottom: 1px solid ${brand.border}; color: ${brand.ink}; font-size: 15px; line-height: 1.55; font-weight: 600; vertical-align: top;">
            ${escapeHtml(value)}
          </td>
        </tr>`
    )
    .join("");
}

function renderEmailShell({
  eyebrow,
  title,
  intro,
  children,
  footerNote,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: string;
  footerNote: string;
}): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin: 0; padding: 0; background: ${brand.soft}; font-family: Arial, Helvetica, sans-serif; color: ${brand.ink};">
    <!-- Preview text (hidden) -->
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: transparent;">
      ${escapeHtml(intro)}
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: ${brand.soft}; margin: 0; padding: 32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 680px; background: #ffffff; border: 1px solid ${brand.border}; border-radius: 22px; overflow: hidden; box-shadow: 0 18px 45px rgba(10, 17, 45, 0.08);">
            <!-- Header -->
            <tr>
              <td style="background: ${brand.primary}; background-image: linear-gradient(135deg, ${brand.primary} 0%, ${brand.blue} 78%); padding: 30px 34px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td align="left">
                      <img src="${brand.logoUrl}" width="156" alt="Countify UAE" style="display: block; width: 156px; max-width: 100%; height: auto; border: 0;">
                    </td>
                    <td align="right" style="color: #f6dca9; font-size: 12px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase;">
                      ${escapeHtml(eyebrow)}
                    </td>
                  </tr>
                </table>
                <h1 style="margin: 30px 0 10px; color: #ffffff; font-size: 29px; line-height: 1.2; font-weight: 800; letter-spacing: 0;">
                  ${escapeHtml(title)}
                </h1>
                <p style="margin: 0; color: #dce6ff; font-size: 15px; line-height: 1.65;">
                  ${escapeHtml(intro)}
                </p>
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding: 32px 34px 10px;">
                ${children}
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding: 18px 34px 34px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: ${brand.primary}; border-radius: 18px; overflow: hidden;">
                  <tr>
                    <td style="padding: 24px; border-top: 4px solid ${brand.gold};">
                      <p style="margin: 0 0 10px; color: #ffffff; font-size: 16px; font-weight: 800;">
                        ${brand.name}
                      </p>
                      <p style="margin: 0; color: #dce6ff; font-size: 13px; line-height: 1.7;">
                        UAE Office: ${companyDetails.uaeOffice.join(", ")}<br>
                        UK Office: ${companyDetails.ukOffice.join(", ")}<br>
                        <a href="mailto:${brand.email}" style="color: #f6dca9; text-decoration: none;">${brand.email}</a>
                        &nbsp;|&nbsp;
                        <a href="tel:+971585117901" style="color: #f6dca9; text-decoration: none;">${brand.phone}</a>
                        &nbsp;|&nbsp;
                        <a href="${brand.website}" style="color: #f6dca9; text-decoration: none;">${brand.website.replace("https://", "")}</a>
                      </p>
                    </td>
                  </tr>
                </table>
                <p style="margin: 18px 0 0; color: #7b8498; font-size: 11px; line-height: 1.6;">
                  ${escapeHtml(footerNote)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

// ---------------------------------------------------------------------------
// Plain-text builders
// ---------------------------------------------------------------------------

function buildPlainTextNotification({
  formName,
  fields,
  source,
  submittedAt = new Date(),
}: SendNotificationEmailInput): string {
  const fieldLines = Object.entries(fields).map(
    ([label, value]) => `${label}: ${formatFieldValue(value)}`
  );
  return [
    `New Countify UAE Website Enquiry — ${formName}`,
    "",
    `Submitted at: ${submittedAt.toISOString()}`,
    `Source: ${source ?? "Not provided"}`,
    "",
    "Submitted details:",
    ...fieldLines,
  ].join("\n");
}

function buildPlainTextConfirmation({
  formName,
  fields,
}: SendNotificationEmailInput): string {
  return [
    `Thank you for contacting ${brand.name}.`,
    "",
    `We have received your ${formName.toLowerCase()} and our team will respond within 1 business day.`,
    "",
    "Your submitted details:",
    ...Object.entries(fields).map(
      ([label, value]) => `${label}: ${formatFieldValue(value)}`
    ),
    "",
    brand.name,
    companyDetails.uaeOffice.join(", "),
    `${brand.email} | ${brand.phone}`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// HTML builders
// ---------------------------------------------------------------------------

function buildNotificationHtml(
  input: SendNotificationEmailInput & { submittedAt: Date }
): string {
  const submittedAt = formatSubmittedAt(input.submittedAt);
  const sourceUrl = input.source ?? brand.website;
  const replyTo = input.replyTo ?? brand.email;

  return renderEmailShell({
    eyebrow: input.formName,
    title: `New Website Enquiry — ${input.formName}`,
    intro: "A new enquiry has been submitted through the Countify UAE website.",
    footerNote:
      "This internal notification may contain confidential client information. Use it only to respond to the enquiry and handle it in line with Countify UAE privacy practices.",
    children: `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 22px;">
        <tr>
          <td style="background: #fff8ec; border: 1px solid #f1d5a4; border-radius: 16px; padding: 18px;">
            <p style="margin: 0 0 6px; color: ${brand.gold}; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em;">
              Submitted
            </p>
            <p style="margin: 0; color: ${brand.ink}; font-size: 16px; font-weight: 800;">
              ${escapeHtml(submittedAt)} GST
            </p>
            <p style="margin: 8px 0 0; color: ${brand.muted}; font-size: 13px; line-height: 1.5;">
              Source: <a href="${escapeAttribute(sourceUrl)}" style="color: ${brand.blue}; text-decoration: underline;">${escapeHtml(sourceUrl)}</a>
            </p>
          </td>
        </tr>
      </table>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
        ${renderFieldRows(input.fields)}
      </table>
      <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top: 26px;">
        <tr>
          <td style="border-radius: 999px; background: ${brand.gold};">
            <a href="mailto:${escapeAttribute(replyTo)}" style="display: inline-block; padding: 13px 22px; color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none;">
              Reply to Enquiry
            </a>
          </td>
        </tr>
      </table>`,
  });
}

function buildConfirmationHtml(
  input: SendNotificationEmailInput & { submitterName: string }
): string {
  return renderEmailShell({
    eyebrow: "Enquiry received",
    title: "Thank you for contacting Countify UAE",
    intro:
      "We have received your enquiry and our team will respond within 1 business day.",
    footerNote:
      "This confirmation is sent because your email address was submitted through the Countify UAE website. If you did not submit this request, please ignore this email or contact us.",
    children: `
      <p style="margin: 0 0 18px; color: ${brand.ink}; font-size: 16px; line-height: 1.7;">
        Hello ${escapeHtml(input.submitterName)},
      </p>
      <p style="margin: 0 0 24px; color: ${brand.muted}; font-size: 15px; line-height: 1.75;">
        Thanks for reaching out. We have received your message and a member of the Countify UAE team will review it shortly.
      </p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: ${brand.soft}; border: 1px solid ${brand.border}; border-radius: 18px; padding: 0; overflow: hidden;">
        <tr>
          <td style="padding: 20px 22px;">
            <p style="margin: 0 0 12px; color: ${brand.gold}; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: .08em;">
              Your submission summary
            </p>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
              ${renderFieldRows(input.fields)}
            </table>
          </td>
        </tr>
      </table>
      <table role="presentation" cellspacing="0" cellpadding="0" style="margin-top: 26px;">
        <tr>
          <td style="border-radius: 999px; background: ${brand.gold};">
            <a href="${brand.whatsappUrl}" style="display: inline-block; padding: 13px 22px; color: #ffffff; font-size: 14px; font-weight: 800; text-decoration: none;">
              Chat on WhatsApp
            </a>
          </td>
          <td style="padding-left: 12px;">
            <a href="mailto:${brand.email}" style="color: ${brand.blue}; font-size: 14px; font-weight: 800; text-decoration: none;">
              Email us
            </a>
          </td>
        </tr>
      </table>`,
  });
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Send a notification email to the Countify UAE team and, if a reply-to
 * address is provided, a confirmation email to the submitter.
 *
 * The two sends are independent: if the confirmation fails the caller
 * receives a partial-success result that still exposes the notification ID
 * so that the primary record is never silently lost.
 */
export async function sendNotificationEmail(
  rawInput: SendNotificationEmailInput
): Promise<SendNotificationEmailResult> {
  const config = getEmailConfig();

  if (!config.success) {
    console.error("[email] Configuration error:", config.error);
    return { success: false, error: "Email service is not configured." };
  }

  // Sanitise fields once; all downstream functions use the clean copy.
  const input: SendNotificationEmailInput & {
    submittedAt: Date;
    fields: Record<string, EmailFieldValue>;
  } = {
    ...rawInput,
    submittedAt: rawInput.submittedAt ?? new Date(),
    fields: sanitiseFields(rawInput.fields),
  };

  const resend = new Resend(config.apiKey);

  // ── 1. Notification email (team) ─────────────────────────────────────────
  let notificationId: string | undefined;

  try {
    const notificationResult = await resend.emails.send({
      from: config.from,
      to: config.to,
      subject: input.subject,
      text: buildPlainTextNotification(input),
      html: buildNotificationHtml(input),
      replyTo: input.replyTo,
    });

    if (notificationResult.error) {
      console.error("[email] Notification send failed:", {
        name: notificationResult.error.name,
        message: notificationResult.error.message,
      });
      return { success: false, error: "Notification email could not be sent." };
    }

    notificationId = notificationResult.data?.id;
  } catch (error) {
    console.error("[email] Unexpected notification failure:", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: error instanceof Error ? error.message : String(error),
    });
    return { success: false, error: "Notification email could not be sent." };
  }

  // ── 2. Confirmation email (submitter) — independent of notification ───────
  if (input.replyTo) {
    const submitterName = resolveSubmitterName(input.fields);

    try {
      const confirmationResult = await resend.emails.send({
        from: config.from,
        to: input.replyTo,
        subject: "We received your Countify UAE enquiry",
        text: buildPlainTextConfirmation(input),
        html: buildConfirmationHtml({ ...input, submitterName }),
        replyTo: brand.email,
      });

      if (confirmationResult.error) {
        console.error("[email] Confirmation send failed:", {
          name: confirmationResult.error.name,
          message: confirmationResult.error.message,
        });
        // Notification succeeded; report partial success with the notification ID.
        return {
          success: false,
          error: "Confirmation email could not be sent.",
          notificationId,
        };
      }

      return {
        success: true,
        notificationId,
        confirmationId: confirmationResult.data?.id,
      };
    } catch (error) {
      console.error("[email] Unexpected confirmation failure:", {
        name: error instanceof Error ? error.name : "UnknownError",
        message: error instanceof Error ? error.message : String(error),
      });
      return {
        success: false,
        error: "Confirmation email could not be sent.",
        notificationId,
      };
    }
  }

  return { success: true, notificationId };
}
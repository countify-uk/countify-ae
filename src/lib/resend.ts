import { Resend } from "resend";

type EmailFieldValue = string | number | boolean | null | undefined;

type SendNotificationEmailInput = {
  subject: string;
  formName: string;
  fields: Record<string, EmailFieldValue>;
  source?: string;
  replyTo?: string;
};

type SendNotificationEmailResult =
  | { success: true; id?: string }
  | { success: false; error: string };

const requiredEnvVars = [
  "RESEND_API_KEY",
  "RESEND_FROM_EMAIL",
  "RESEND_TO_EMAIL",
] as const;

function readEnvValue(key: (typeof requiredEnvVars)[number]) {
  const rawValue = process.env[key];

  if (!rawValue) return "";

  let value = rawValue.trim();

  if (value.startsWith(`${key}=`)) {
    value = value.slice(key.length + 1).trim();
  }

  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    value = value.slice(1, -1).trim();
  }

  return value;
}

function redactEmailConfigIssue(key: string, value: string) {
  if (!value) return `${key} is empty`;

  return `${key} has an invalid value format`;
}

function getEmailConfig() {
  const env = {
    RESEND_API_KEY: readEnvValue("RESEND_API_KEY"),
    RESEND_FROM_EMAIL: readEnvValue("RESEND_FROM_EMAIL"),
    RESEND_TO_EMAIL: readEnvValue("RESEND_TO_EMAIL"),
  };
  const missing = requiredEnvVars.filter((key) => !env[key]);

  if (missing.length > 0) {
    return {
      success: false as const,
      error: `Missing email environment variables: ${missing.join(", ")}`,
    };
  }

  if (
    !env.RESEND_API_KEY.startsWith("re_") ||
    env.RESEND_API_KEY.includes("dummy_api_key_replace_me")
  ) {
    return {
      success: false as const,
      error: redactEmailConfigIssue("RESEND_API_KEY", env.RESEND_API_KEY),
    };
  }

  return {
    success: true as const,
    apiKey: env.RESEND_API_KEY,
    from: env.RESEND_FROM_EMAIL,
    to: env.RESEND_TO_EMAIL,
  };
}

function formatFieldValue(value: EmailFieldValue) {
  if (value === null || value === undefined || value === "") return "Not provided";
  return String(value);
}

function buildPlainTextEmail({
  formName,
  fields,
  source,
}: SendNotificationEmailInput) {
  const submittedAt = new Date().toISOString();
  const fieldLines = Object.entries(fields).map(
    ([label, value]) => `${label}: ${formatFieldValue(value)}`
  );

  return [
    `New Countify UAE Website Enquiry - ${formName}`,
    "",
    `Submitted at: ${submittedAt}`,
    `Source: ${source || "Not provided"}`,
    "",
    "Submitted details:",
    ...fieldLines,
  ].join("\n");
}

export async function sendNotificationEmail(
  input: SendNotificationEmailInput
): Promise<SendNotificationEmailResult> {
  const config = getEmailConfig();

  if (!config.success) {
    console.error("[email] Configuration error:", config.error);
    return {
      success: false,
      error: "Email service is not configured.",
    };
  }

  try {
    const resend = new Resend(config.apiKey);
    const { data, error } = await resend.emails.send({
      from: config.from,
      to: config.to,
      subject: input.subject,
      text: buildPlainTextEmail(input),
      replyTo: input.replyTo,
    });

    if (error) {
      console.error("[email] Resend send failed:", {
        name: error.name,
        message: error.message,
      });
      return {
        success: false,
        error: "Email could not be sent.",
      };
    }

    return { success: true, id: data?.id };
  } catch (error) {
    console.error("[email] Unexpected send failure:", {
      name: error instanceof Error ? error.name : "UnknownError",
      message: error instanceof Error ? error.message : "Unknown email error",
    });
    return {
      success: false,
      error: "Email could not be sent.",
    };
  }
}

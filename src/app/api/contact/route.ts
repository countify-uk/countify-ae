import { NextResponse } from "next/server";
import { z } from "zod";
import { sendNotificationEmail } from "@/lib/resend";

const submissionSchema = z.object({
  formType: z.enum(["contact", "consultation"]),
  name: z.string().trim().min(2, "Name is required"),
  email: z.string().trim().email("Valid email is required"),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  service: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
  source: z.string().trim().max(300).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
}).superRefine((data, ctx) => {
  if (data.formType === "consultation" && !data.service) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Service is required",
      path: ["service"],
    });
  }
});

const formLabels = {
  contact: "Contact Form",
  consultation: "Consultation Form",
} as const;

const serviceLabels: Record<string, string> = {
  "rd-advisory": "R&D Advisory",
  "corporate-tax": "Corporate Tax",
  "vat-return": "VAT Registration & Filing",
  "company-formation": "Company Formation",
  bookkeeping: "Bookkeeping",
  "payroll-services": "Payroll Services",
  "year-end-accounts": "Year-End Accounts",
  "audit-preparation": "Audit Preparation",
};

function formatService(service?: string) {
  if (!service) return service;
  return serviceLabels[service] || service;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid submission." },
      { status: 400 }
    );
  }

  const parsed = submissionSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Please check the form and try again." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  if (data.website) {
    return NextResponse.json({
      success: true,
      message: "Thank you. We will contact you shortly.",
    });
  }

  const formName = formLabels[data.formType];
  const emailResult = await sendNotificationEmail({
    subject: `New Countify UAE Website Enquiry - ${formName}`,
    formName,
    source: data.source,
    replyTo: data.email,
    fields: {
      Name: data.name,
      Email: data.email,
      Phone: data.phone,
      Company: data.company,
      Service: formatService(data.service),
      Message: data.message,
    },
  });

  if (!emailResult.success) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Your message could not be sent right now. Please try again or contact us directly.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thank you. We will contact you shortly.",
  });
}

import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, subject, message } = await req.json();

  const subjectLabels: Record<string, string> = {
    "general":        "General Inquiry",
    "private-events": "Private Events",
    "feedback":       "Feedback",
    "press":          "Press & Media",
    "other":          "Other",
  };

  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email send");
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from:    "Kirwan's Contact Form <onboarding@resend.dev>",
      to:      process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `[Kirwan's] ${subjectLabels[subject] ?? subject} — ${name}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "—"}`,
        `Subject: ${subjectLabels[subject] ?? subject}`,
        ``,
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

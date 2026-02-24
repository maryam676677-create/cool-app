export const runtime = "nodejs";
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
try {
const { name, email, message } = await req.json();

await sgMail.send({
to: "maryam676677@gmail.com",
from: "maryam676677@gmail.com",
subject: `Neue Nachricht von ${name}`,
text: `
Name: ${name}
Email: ${email}
Message: ${message}
`,
});

return NextResponse.json({ success: true });
} catch (error) {
console.error(error);
return NextResponse.json({ error: "Error sending email" }, { status: 500 });
}
}




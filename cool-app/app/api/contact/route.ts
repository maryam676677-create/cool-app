import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
const { name, book, message } = await req.json();

const msg = {
to: "maryam676677@gmail.com",
from: "maryam676677@gmail.com",
subject: "Neue Buchempfehlung",
text: `
Name: ${name}
Buch: ${book}
Nachricht: ${message}
`,
};

try {
await sgMail.send(msg);
return NextResponse.json({ success: true });
} catch (error) {
console.error(error);
return NextResponse.json({ error: "Fehler beim Senden" }, { status: 500 });
}
}



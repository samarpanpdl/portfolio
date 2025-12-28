// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import{NextResponse} from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
export async function POST(req, res) {
    const {body} = await req.json();
    const { email, subject, message } = body;
    
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['poudelaashutosh27@gmail.com',email],
      subject: subject,
      react: (<>
            <h1>{subject}</h1>
            <p>Thank you for contacting.</p>
            <p>{message}</p>
            </>),
    });

    return NextResponse.json({ status: 200, data });
  } catch (error) {
    return NextResponse.json({ status: 500, error });
  }
}
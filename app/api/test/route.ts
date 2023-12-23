// import FeedbackEmail from "@/components/landing/feedback/feedback-email";
// import { render } from "@react-email/render";
import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//     try {
//         const transporter = nodemailer.createTransport({
//             port: 465,
//             host: "smtp.gmail.com",
//             auth: {
//                 user: process.env.EMAIL,
//                 pass: process.env.PASSWORD,
//             },
//             secure: true,
//         });
//         const body = await req.json();
//         const {
//             score,
//             challenge,
//             code,
//             dateTime,
//             email,
//         }: {
//             score: string;
//             challenge: string;
//             code: string;
//             dateTime: string;
//             email: string;
//         } = body;
//         const emailHtml = render(
//             ScoreEmail({ score, challenge, code, dateTime })
//         );
//         const options = {
//             from: `"Tailspin Team" <tailspin.official@gmail.com>"`,
//             to: email,
//             subject: `The results are in!`,
//             html: emailHtml,
//         };
//         const sendMessage = async (options: {
//             from: string | undefined;
//             to: string;
//             subject: string;
//             html: string;
//         }) => {
//             await transporter.sendMail(options);
//         };
//         await sendMessage(options);
//         return NextResponse.json({ message: "Success" }, { status: 200 });
//     } catch (error) {
//         console.log(error);
//         return NextResponse.json(
//             { message: "Internal server error" },
//             { status: 500 }
//         );
//     }
// }
export async function POST(req: Request) {
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

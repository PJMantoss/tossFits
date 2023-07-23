import { createTransport } from "nodemailer";
//import "dotenv/config";

const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

function makeNiceEmail(text: string){
    return `
        <div style="
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px;
        ">
            <h2>Hello There!</h2>
        </div>
    `;
}
import { createTransport } from "nodemailer";

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'laurence.gottlieb@ethereal.email',
        pass: 'VWpfhvnG5y3ydfwuqp'
    }
});
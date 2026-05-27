import nodemailer from 'nodemailer';

const EmailSending = async (Email , Subject , Message) => {

    //Transporter
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port:   587, 
        secure: false, 
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls:{
            rejectUnauthorized: false // Simple words it means We dont care about the SSL certificate here
        }
    });

    //mail options
    const mailOptions = {
        from: "pantho625@gmail.com",
        to: Email,
        subject: Subject,
        text: Message 
    }

    //Send email
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email Sent Successfully");
    } catch (error) {
        console.log("Error sending email:", error);
    }

}

(async () => {
EmailSending("baruabarua733@gmail.com" , "Test Email" , "This is a test email sent using Nodemailer");
})();


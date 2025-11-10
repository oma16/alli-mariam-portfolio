import nodemailer from "nodemailer";

export default async function (req, res) {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail", // Can use other services like SendGrid
    auth: {
      user: process.env.GMAIL_USER, // Add these to Vercel's environment variables
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Contact Form Submission: ${subject}`,
    text: `You have a new message from ${name} (${email})\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}

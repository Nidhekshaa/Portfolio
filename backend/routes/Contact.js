const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nknidhekshaa@gmail.com",
      pass: process.env.EMAIL_PASSWORD 
    }
  });

  const mailOptions = {
    from: email,
    to: "nknidhekshaa@gmail.com",
    subject: `Portfolio Contact: ${subject}`,
    html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #00bcd4; text-align: center;">📬 New Contact from Portfolio</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; font-weight: bold; width: 120px;">Name:</td>
          <td style="padding: 10px;">${name}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 10px; font-weight: bold;">Email:</td>
          <td style="padding: 10px;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Mobile:</td>
          <td style="padding: 10px;">${mobile}</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="padding: 10px; font-weight: bold;">Subject:</td>
          <td style="padding: 10px;">${subject}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold;">Message:</td>
          <td style="padding: 10px;">${message.replace(/\n/g, "<br>")}</td>
        </tr>
      </table>
      <p style="margin-top: 30px; text-align: center; color: #999; font-size: 0.9rem;">
        Sent from Nidhekshaa's Portfolio Website 🌐
      </p>
    </div>`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

module.exports = router;

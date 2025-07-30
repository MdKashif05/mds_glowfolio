import { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {

  // ✅ Contact Form API
  app.post("/api/contact", async (req: Request, res: Response) => {
    const { name, email, subject, message } = req.body;

    console.log("📩 Incoming Contact Request:", req.body); // Debug log

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    try {
      // ✅ Setup Gmail SMTP
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      // ✅ Send Email
      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, 
        subject: subject || `New message from ${name}`,
        text: `📧 From: ${name} <${email}>\n\n${message}`,
      });

      console.log("✅ Email sent successfully");
      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      console.error("❌ Email sending failed:", error);
      res.status(500).json({ success: false, error: "Failed to send message" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

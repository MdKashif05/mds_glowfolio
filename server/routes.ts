import { type Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { insertReviewSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {

  // ✅ Get Reviews
  app.get("/api/reviews", async (req: Request, res: Response) => {
    try {
      const reviews = await storage.getReviews();
      res.json(reviews);
    } catch (error) {
      console.error("❌ Failed to fetch reviews:", error);
      res.status(500).json({ success: false, error: "Failed to fetch reviews" });
    }
  });

  // ✅ Add Review
  app.post("/api/reviews", async (req: Request, res: Response) => {
    try {
      console.log("Received review submission");
      const parsed = insertReviewSchema.safeParse(req.body);
      if (!parsed.success) {
        console.error("Validation error:", parsed.error);
        return res.status(400).json({ success: false, error: parsed.error });
      }

      const review = await storage.createReview(parsed.data);
      console.log("Review created:", review.id);
      res.status(201).json({ success: true, review });
    } catch (error) {
      console.error("❌ Failed to create review:", error);
      res.status(500).json({ success: false, error: "Failed to create review" });
    }
  });

  // ✅ Delete Review
  app.delete("/api/reviews/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      await storage.deleteReview(id);
      res.json({ success: true });
    } catch (error) {
      console.error("❌ Failed to delete review:", error);
      res.status(500).json({ success: false, error: "Failed to delete review" });
    }
  });

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

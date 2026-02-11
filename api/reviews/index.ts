import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';
import { insertReviewSchema } from '../../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'GET') {
        try {
            const reviews = await storage.getReviews();
            return res.json(reviews);
        } catch (error) {
            console.error("❌ Failed to fetch reviews:", error);
            return res.status(500).json({ success: false, error: "Failed to fetch reviews" });
        }
    }

    if (req.method === 'POST') {
        try {
            const parsed = insertReviewSchema.safeParse(req.body);
            if (!parsed.success) {
                return res.status(400).json({ success: false, error: parsed.error });
            }

            const review = await storage.createReview(parsed.data);
            return res.status(201).json({ success: true, review });
        } catch (error) {
            console.error("❌ Failed to create review:", error);
            return res.status(500).json({ success: false, error: "Failed to create review" });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

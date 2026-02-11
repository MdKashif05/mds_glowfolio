import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'DELETE') {
        try {
            const { id } = req.query;
            if (!id || Array.isArray(id)) {
                return res.status(400).json({ success: false, error: "Invalid ID" });
            }

            await storage.deleteReview(id);
            return res.json({ success: true });
        } catch (error) {
            console.error("❌ Failed to delete review:", error);
            return res.status(500).json({ success: false, error: "Failed to delete review" });
        }
    }

    return res.status(405).json({ error: 'Method not allowed' });
}

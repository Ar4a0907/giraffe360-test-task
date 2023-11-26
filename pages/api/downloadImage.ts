import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const imageUrl = req.query.url as string;

        if (!imageUrl) {
            return res.status(400).json({ error: "Missing image URL parameter" });
        }

        const response = await fetch(imageUrl, { cache: "no-store" });

        if (!response.ok) {
            return res.status(500).json({ error: "Failed to download image" });
        }

        const arrayBuffer = await response.arrayBuffer();

        const imageBuffer = Buffer.from(arrayBuffer);

        res.setHeader("Content-Type", "image/jpeg");
        res.setHeader("Content-Disposition", "attachment; filename=image.jpg");
        res.end(imageBuffer);
    } catch (error) {
        // eslint-disable-next-line
        console.error("Error downloading image:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
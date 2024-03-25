import type { NextApiRequest, NextApiResponse } from "next";
import ytdl from "ytdl-core";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const youtubeUrl = `https://www.youtube.com/watch?v=${req.query.vid}`;
  res.setHeader("Content-Type", "video/mp4");
  res.send(ytdl(youtubeUrl, { quality: 18 }));
}

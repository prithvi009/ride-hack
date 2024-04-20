import express from "express";

const router = express.Router();

router.get("/livestreams", async (req, res) => {
  let livestreams = await LiveStream.find({});
  res.json({ livestreams });
});

router.post("/postlive", async (req, res) => {
  const streams = await LiveStream.create(req.body);
  res.status(201).json({ streams });
});

router.post("/goinlive", async (req, res) => {
  const useinlive = await UserInLive.create(req.body);
  res.status(201).json({ useinlive });
});

router.get("/usersinlive", async (req, res) => {
  const users = await UserInLive.find({ isinsidelive: false });
  res.status(201).json({ users });
});

export default router;

import { Router } from "express";
import { services } from "../sample-data.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(services);
});

export default router;

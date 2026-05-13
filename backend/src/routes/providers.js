import { Router } from "express";
import { providers } from "../sample-data.js";

const router = Router();

router.get("/", (req, res) => {
  const { serviceId, area } = req.query;
  let result = providers;
  if (serviceId) {
    result = result.filter((p) => p.services.includes(serviceId));
  }
  if (area) {
    result = result.filter((p) => p.area.toLowerCase().includes(area.toLowerCase()));
  }
  res.json(result);
});

export default router;

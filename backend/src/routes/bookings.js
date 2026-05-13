import { Router } from "express";
import { bookings, providers, services } from "../sample-data.js";

const router = Router();

router.get("/", (req, res) => {
  res.json(bookings);
});

router.post("/", (req, res) => {
  const { userId, providerId, serviceId, scheduledAt, address } = req.body || {};
  if (!userId || !providerId || !serviceId || !scheduledAt) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const provider = providers.find((p) => p.id === providerId);
  const service = services.find((s) => s.id === serviceId);
  if (!provider || !service) {
    return res.status(404).json({ error: "Provider or service not found" });
  }
  const booking = {
    id: `bk-${String(bookings.length + 1).padStart(3, "0")}`,
    userId,
    providerId,
    serviceId,
    scheduledAt,
    address: address || null,
    status: "pending",
    createdAt: new Date().toISOString()
  };
  bookings.push(booking);
  res.status(201).json(booking);
});

router.post("/:id/cancel", (req, res) => {
  const { id } = req.params;
  const booking = bookings.find((b) => b.id === id);
  if (!booking) return res.status(404).json({ error: "Booking not found" });
  booking.status = "cancelled";
  res.json(booking);
});

export default router;

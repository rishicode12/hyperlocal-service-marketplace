import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import servicesRouter from "./routes/services.js";
import providersRouter from "./routes/providers.js";
import bookingsRouter from "./routes/bookings.js";
import authRouter from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.WEB_ORIGIN || "http://localhost:4028";

app.use(cors({ origin: ORIGIN, credentials: true }));
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "hyperlocal-backend" });
});

app.use("/api/services", servicesRouter);
app.use("/api/providers", providersRouter);
app.use("/api/bookings", bookingsRouter);
app.use("/api/auth", authRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});

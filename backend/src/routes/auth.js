import { Router } from "express";

const router = Router();

const users = [];

router.post("/register", (req, res) => {
  const { email, password, name } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });
  const exists = users.find((u) => u.email === email);
  if (exists) return res.status(409).json({ error: "Email already exists" });
  const user = { id: `usr-${String(users.length + 1).padStart(3, "0")}`, email, name: name || null };
  users.push({ ...user, password });
  res.status(201).json({ user });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body || {};
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  res.json({ token: "dev-token", user: { id: user.id, email: user.email, name: user.name || null } });
});

export default router;

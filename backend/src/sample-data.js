export const services = [
  { id: "svc-001", name: "Home Cleaning", category: "Home", priceMin: 499 },
  { id: "svc-002", name: "Plumbing", category: "Home", priceMin: 599 },
  { id: "svc-003", name: "Electric Repair", category: "Home", priceMin: 699 },
  { id: "svc-004", name: "Nail Pedicure", category: "Beauty", priceMin: 399 }
];

export const providers = [
  {
    id: "pro-001",
    name: "SparkFix Electricians",
    rating: 4.7,
    services: ["svc-003"],
    area: "Indiranagar"
  },
  {
    id: "pro-002",
    name: "CleanCo",
    rating: 4.5,
    services: ["svc-001"],
    area: "Koramangala"
  },
  {
    id: "pro-003",
    name: "PipePros",
    rating: 4.6,
    services: ["svc-002"],
    area: "HSR Layout"
  },
  {
    id: "pro-004",
    name: "Salon at Home",
    rating: 4.3,
    services: ["svc-004"],
    area: "Marathahalli"
  }
];

export const bookings = [];

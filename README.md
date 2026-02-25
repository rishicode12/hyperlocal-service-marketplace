# UrbanEase | Hyperlocal Service Booking Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://javascript.info/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

---

## 📌 Project Problem Statement
Develop a service booking platform where users can hire local professionals (plumbers, electricians, etc.) with live tracking, ratings, and secure payment options. 

### Use Case
Build a small-scale **Urban Company-style** platform to understand hyperlocal service logistics and provider-user management.

---

## 🚀 Key Modules

* **User Registration:** OTP-based optional with JWT Authentication.
* **Location-based Service Search:** Find providers based on proximity and category.
* **Provider Directory:** A responsive grid layout featuring pricing, ratings, and experience.
* **Ratings & Reviews:** Verified feedback system for service quality.
* **Booking History:** Dedicated dashboards for both Users and Providers.
* **Admin Panel:** Centralized management for Services, Providers, and Bookings.
* **Payment Gateway:** Integrated with Razorpay or Stripe for secure transactions.

---

## 🛠️ Tech Stack & Features

- **Frontend:** React 18, Vite, TailwindCSS, Redux Toolkit, Framer Motion.
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB with Mongoose ODM.
- **Security:** Bcrypt Password Hashing & JWT Role-based Access (User/Provider/Admin).

---

## 📅 Development Plan (Week-wise)

| Week | Backend (Node.js + Express) | Frontend (React.js) |
| :--- | :--- | :--- |
| **Week 1** | JWT Auth, Role Access, Bcrypt Hashing | Setup, Auth UI, Homepage |
| **Week 2** | Service APIs: List, Book, Manage | API Integration, Service Listings, Booking Forms |
| **Week 3** | Booking Status APIs, Review Integration | Dashboard, Ratings UI, Payment Gateway |
| **Week 4** | API Cleanup, Testing, Admin Logic | Responsive UI, Admin Dashboard, Final Review |

---

## 📁 Project Structure

```text
urban-ease/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI (Cards, Filters, Nav)
│   ├── pages/          # Home, ProviderGrid, Dashboard
│   ├── store/          # Redux State Management
│   ├── styles/         # Tailwind Global Styles
│   ├── App.jsx         # Main App Component
│   └── Routes.jsx      # Navigation Logic
├── .env                # API Keys & Secrets
├── tailwind.config.js  # UI Theme Configuration
└── vite.config.js      # Build Tool Config
```

## 🔧 Installation & Usage
Clone the repo:

Bash
git clone [https://github.com/yourusername/urbanease.git](https://github.com/yourusername/urbanease.git)
Install dependencies:

Bash
npm install
Start Development Server:

Bash
npm run dev
Production Build:

Bash
npm run build
📱 Responsive Design
The app is built with a mobile-first approach using Tailwind CSS. The Provider Directory utilizes a dynamic grid that collapses from 4 columns to 1 or 2 based on the viewport size to ensure accessibility across all devices.

## 🙏 Acknowledgments
Powered by React and Vite.

Design inspired by modern hyperlocal service platforms.

# 🛍️ Mini eCommerce Flow

A 3-page simulated eCommerce experience built to demonstrate end-to-end purchase flow including:

- Product Selection
- Secure Checkout
- Transaction Simulation (Approved / Declined / Failed)
- Confirmation Email via Mailtrap
- Persistent Order Storage

> 🔗 **Live Demo:** [Click here to try it out](https://your-deployed-site-link.com)

---

## 📑 Project Structure

# 🛍️ Mini eCommerce Flow

A 3-page simulated eCommerce experience built to demonstrate end-to-end purchase flow including:

- Product Selection
- Secure Checkout
- Transaction Simulation (Approved / Declined / Failed)
- Confirmation Email via Mailtrap
- Persistent Order Storage

> 🔗 **Live Demo:** [Click here to try it out](https://your-deployed-site-link.com)

---

## 📑 Project Structure

# 🛍️ Mini eCommerce Flow

A 3-page simulated eCommerce experience built to demonstrate end-to-end purchase flow including:

- Product Selection
- Secure Checkout
- Transaction Simulation (Approved / Declined / Failed)
- Confirmation Email via Mailtrap
- Persistent Order Storage

> 🔗 **Live Demo:** [Click here to try it out](https://your-deployed-site-link.com)

---

## 📑 Project Structure

├── client/ # Frontend (React or Next.js)
│ ├── pages/ # Landing, Checkout, Thank You
│ ├── components/ # UI Components
│ └── utils/ # Helper functions
├── server/ # Backend (Node.js + Express)
│ ├── routes/ # API Routes
│ ├── models/ # MongoDB Models
│ └── controllers/ # Business Logic
├── .env # Environment Variables
├── README.md # This file
└── package.json

---

## 🌐 Pages & Features

### 🔹 Landing Page

- Product Image, Title, Description, Price
- Variant and Quantity Selectors
- "Buy Now" triggers checkout navigation

### 🔸 Checkout Page

- Form with validations (email, phone, card number, expiry, CVV)
- Live order summary based on product selections
- Simulates 3 transaction outcomes:
  - ✅ Approved
  - ❌ Declined
  - ⚠️ Gateway Failure
- Stores data in MongoDB and generates unique order number
- Sends confirmation emails using Mailtrap.io

### ✅ Thank You Page

- Displays order number
- Full order and customer data from DB
- Confirmation message

---

## 💻 Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Frontend   | React / Next.js           |
| Backend    | Node.js + Express         |
| Database   | MongoDB Atlas             |
| Email      | Mailtrap.io (SMTP)        |
| Deployment | Vercel / Render / Netlify |

---

## 📩 Email Templates via Mailtrap

| Outcome     | Template Content                                |
| ----------- | ----------------------------------------------- |
| ✅ Approved | Order summary, customer info, thank you message |
| ❌ Declined | Retry/support instructions                      |
| ⚠️ Failure  | Informative error & contact info                |

> 🔐 Emails sent securely in **sandbox mode** using Mailtrap SMTP credentials.

---

## 🔁 Transaction Simulation

To test different outcomes on the **Checkout Page**:
| Input Value | Outcome |
|-------------|--------------------|
| `1` | ✅ Approved |
| `2` | ❌ Declined |
| `3` | ⚠️ Gateway Failure |

- CVV: Any 3-digit number
- Expiry Date: Any future date

---

## 🛠️ Installation & Setup

### 📦 Backend

```bash
cd server
npm install
cp .env.example .env    # Add Mongo URI, Mailtrap SMTP creds
npm run dev
```

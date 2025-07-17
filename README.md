# 🛒 ProShop - MERN Stack E-Commerce App

A full-featured **E-Commerce web application** built with the **MERN stack** (MongoDB, Express, React, Node) and Redux Toolkit. This project includes full user authentication, product management, shopping cart, order processing, and admin panel.

---

## 🔗 Live Demo

👉 [Live Site](https://proshop-g1w2.onrender.com/)

---

## 🧰 Tech Stack

### 💻 Frontend
- React
- Redux Toolkit
- React Router
- Bootstrap

### 🔙 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcrypt.js

### 🧪 Other Tools
- PayPal SDK (for payments)
- Multer (for file uploads)
- dotenv
- Morgan (for logging)

---

## 📦 Features

### 👤 User Features
- Register & Login with JWT Auth
- Browse products with pagination & search
- Add to cart & checkout
- View order history
- Update profile information

### 🛠 Admin Features
- Manage products (Create, Update, Delete)
- View & update orders
- Manage users

---

## 📸 Screenshots

### 🛒 Homepage
![Homepage](frontend/public/images/HomePage.png)

### 🧾 Product Page
![Product Page](frontend/public/images/ProductPage.png)

### 📦 Order Page
![Order Page](frontend/public/images/OrderPage.png)
---

## 🛠 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Ayan-004/proshop---mern-stack.git
cd proshop---mern-stack
```

### 2. Install Dependencies

```bash
//Backend
cd backend
npm install

//Frontend
cd ../frontend
npm install
```

## 🔐 Environment Variables
```bash
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

## 🚀 Running the App
Run both frontend and backend:

```bash
# From root folder
npm run dev
```

- Frontend runs on: http://localhost:3000

- Backend API runs on: http://localhost:5000

## 🌱 Seed the Database

```bash
# Import sample data
npm run data:import

# Destroy all data
npm run data:destroy
```

## 📤 Deployment

- **Frontend**: Deployed with **Render**
- **Backend**: Deployed with **Render**
- **Database**: Hosted on **MongoDB Atlas**

## ✍️ Author

**Ayan Shaikh**  
🔗 [Portfolio](https://ayancreates.netlify.app/) | [LinkedIn](https://www.linkedin.com/in/ayan-shaikh-3659a0289/) | [GitHub](https://github.com/Ayan-004)

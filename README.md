
# 🚀 Digitalflake Job Hackathon – Full Stack Application

This project is developed as part of the **Digitalflake 8 hrs Job Hackathon 2024**.  
It is a **full-stack web application** built using **React.js, Node.js (Express), and MySQL**, focusing on clean code, proper database design, and real-world functionality.

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Fetch API
- Basic CSS (inline styling)

### Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt (password encryption)

### Database
- MySQL

---

## ✨ Features

- 🔐 User Authentication (Login using JWT)
- 📊 Dashboard after successful login
- 📁 Category Management
- 📂 Subcategory Management
- 📦 Product Management
- 🔗 SQL JOINs to display Category & Subcategory names in Products
- 🔄 REST APIs (GET, POST)
- 🧱 Clean folder structure (MVC pattern)

---

## 📂 Project Structure

```
digitalflake-hackathon/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
└── README.md
```

---

## 🗄 Database Design

The application uses a normalized MySQL database with the following tables:

- users
- categories
- subcategories
- products

Relationships:
- A Category can have many Subcategories
- A Product belongs to one Category and one Subcategory

---

## 🔐 Authentication

- Passwords are encrypted using **bcrypt**
- Login returns a **JWT token**
- Secure authentication flow implemented

---

## ▶️ How to Run the Project

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

Backend runs on:  
http://localhost:5000

Frontend runs on:  
http://localhost:3000

---

## 🧪 Test Credentials

```
Email: admin@digitalflake.com
Password: admin123
```

---

## 📸 Screenshots

Screenshots included in submission:
- Login Page
- Dashboard
- Categories Page
- Subcategories Page
- Products Page

---

## 📌 Notes

- `.env` file is not pushed for security reasons
- `.env.example` is provided for reference
- `node_modules` is excluded using `.gitignore`

---

## 🏁 Conclusion

This project demonstrates:
- Full-stack development skills
- REST API design
- Authentication using JWT
- Database relationships and SQL JOINs
- Clean and readable code structure

---

## 👤 Author

**Name:** Vijay Boya  
**GitHub:** (Add your GitHub link here)

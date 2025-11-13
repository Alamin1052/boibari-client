# Boibari - Digital Library

Live Site: https://boibari.netlify.app

---

## Description
Boibari is a full-stack digital library web application where users can explore, add, update, and manage books. Authenticated users have control over their own books, and the app ensures secure access using Firebase Authentication and token verification. The platform allows users to comment on books, view detailed information, and manage their own collection of books in a seamless, responsive interface with animations and dynamic content.

---

## Project Features
1.Browse & Explore Books: Users can view all books with detailed information like title, author, genre, rating, and summary.  
2. Add, Update & Delete Books: Authenticated users can manage their own books.  
3.Real-time Comments: Users can comment on book details pages, showing name, photo, and comment with real-time updates.  
4.Responsive & Animated UI: Smooth animations using AOS, Swiper, Framer Motion, and Tailwind CSS.  
5.Private Routes & Security: Routes like Add Book, My Books, and Update Book are protected and require authentication.

---

## Technology Used
Frontend: React, React Router, Tailwind CSS, Swiper.js, AOS, Framer Motion, React Icons, React Hot Toast, Date-fns  
Backend: Node.js, Express.js, MongoDB, Firebase Admin, CORS, dotenv, Axios  
Database: MongoDB Atlas  
Authentication: Firebase Authentication (Email/Password + Google Sign-In)  
Deployment: Cloudfare (Client), Vercel / Render (Server)

---

## Advantages
- Full CRUD operations for books with image upload.  
- Real-time comments for better engagement.  
- Protected private routes for user security.  
- Clean and modern UI with responsive design.  
- Easy to scale and maintain due to modular code structure.


## Library & Packages Used
React Packages: react, react-icons, framer-motion, swiper, aos, react-hot-toast, date-fns  
Node.js Packages: express, cors, dotenv, mongodb, firebase-admin, nodemon  
Styling: Tailwind CSS ,Daisy Ui 

---

## Backend & Authentication
Secure Backend: Node.js + Express.js with MongoDB Atlas to store book and comment data.  
Token Verification: Firebase Admin verifies JWT tokens for secure access to private routes.  
Authentication: Users can register/login via email/password or Google. Protected routes ensure only authenticated users can add, update, or delete books.  
Comment System: Each comment stores user name, photoURL, comment text, and timestamp.  

---

Author: Md Al-Amin  
Project: Boibari - Digital Library

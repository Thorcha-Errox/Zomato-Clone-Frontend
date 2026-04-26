# 🌶️ Spice Bureau - Food Delivery Application

Spice Bureau is a comprehensive, full-stack food delivery platform built with a modern microservices architecture. It provides a seamless experience for users to browse restaurants, place orders, make secure payments, and track their food in real-time.

## 🚀 Live Demo

- **Frontend:** [Hosted on Vercel] *(Add your Vercel URL here)*
<!-- - **Backend Services:** [Hosted on Render] *(Add your Render URL here)* -->

## 🛠️ Tech Stack

### Frontend (Vercel)
- **Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Maps:** Leaflet & React-Leaflet
- **State Management:** Context API
- **Real-time:** Socket.io-client
- **Payments:** Stripe & Razorpay SDKs
- **Auth:** Google OAuth (`@react-oauth/google`)

<!--
### Backend Microservices (Render)
- **Runtime:** Node.js & Express.js
- **Database:** MongoDB (Mongoose & Native Driver)
- **Architecture:** Microservices
  - `Auth Service`: User authentication, Google OAuth, JWT generation.
  - `Restaurant Service`: Restaurant profiles, menu management, order handling.
  - `Utils Service`: Payment gateway webhooks (Stripe/Razorpay), Cloudinary image uploads.
  - `Realtime Service`: WebSockets (Socket.io) for live order tracking.
  - `Rider Service`: Delivery personnel management and routing.
  - `Admin Service`: Platform administration.
- **Message Broker:** RabbitMQ (for asynchronous inter-service communication like payment confirmations).
- **Containerization:** Docker.
-->
## ✨ Features Completed (Works Done)

- **Microservices Architecture:** Highly scalable backend split into specialized services (`auth`, `restaurant`, `utils`, `realtime`, `rider`, `admin`).
- **Authentication:** Secure login/signup using JWT and Google OAuth.
- **Restaurant & Menu Browsing:** Dynamic fetching of restaurants and their respective menu items.
- **Interactive Maps:** Address selection and routing integration using Leaflet.
- **Cart & Checkout:** Robust cart state management leading to a secure checkout flow.
- **Payment Integration:** Support for both Razorpay and Stripe payment gateways.
- **Real-time Tracking:** Live order status updates pushed to the client via WebSockets.
- **Event-Driven Communication:** RabbitMQ implementation for handling payment confirmation events across services.
- **Dockerized:** Containerized backend services with Dockerfiles for consistent development and deployment.
- **CI/CD & Deployment:** Frontend successfully deployed on Vercel and backend services on Render.

## 🚧 Works to be Done (Pending/Incomplete)

- **Rider Application Flow:** Complete the delivery personnel interface, order acceptance, and matching algorithm.
- **Admin Dashboard UI:** Build out the frontend admin panel for monitoring platform metrics and managing users/restaurants.
- **Advanced Search & Filtering:** Implement search by cuisine, rating, and distance on the frontend.
- **Push Notifications:** Integrate service workers or external services for mobile/desktop push notifications.
- **Comprehensive Testing:** Add robust unit and integration tests (Jest/Supertest) for all microservices.

## 💻 Running Locally

### Prerequisites
- Node.js (v18+)
- Docker
- MongoDB (Local or Atlas)
- RabbitMQ
  
<!--
### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd "Food Delivery"
   ```

2. **Environment Variables**
   - Create `.env` files in `frontend/` and inside each service in `services/*/`.
   - Ensure you add necessary keys for MongoDB, RabbitMQ, Stripe/Razorpay, Cloudinary, and Google OAuth.

3. **Start the Backend Services**
   - You can run the services using Docker (if docker-compose is set up) or individually.
   - To run a service individually:
     ```bash
     cd services/<service-name>
     npm install
     npm run dev
     ```

4. **Start the Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. **Access the Application**
   - Open [http://localhost:5173](http://localhost:5173) in your browser.
-->
## 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License
This project is licensed under the MIT License.

# Apv-Backend 🐾

This is the backend code for the **Veterinary Patient Administration** website. The backend is responsible for creating an API that provides JSON responses to be consumed by the frontend, which is located in a separate GitHub repository.
[![Screenshot-from-2024-03-01-14-17-58.png](https://i.postimg.cc/pTPC2bSb/Screenshot-from-2024-03-01-14-17-58.png)](https://postimg.cc/McrVD4xd)

### Frontend Repository:
The frontend code is available in the [apv-frontend repository](https://github.com/Skolldar/apv-frontend.git). Follow the instructions in the `README.md` of the frontend repository to install and configure it to work with this backend.

---

## Technologies Used 🛠️

- **MongoDB**: NoSQL database for storing patient and user data.
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for creating the API.
- **Mongoose**: MongoDB object modeling for Node.js.
- **bcryptjs**: Password hashing for secure authentication.
- **jsonwebtoken**: Token-based authentication for secure API access.
- **dotenv**: Environment variable management.

---
  

## Installation 🚀

To set up the project, follow these steps:

1. **Clone the repositories:**
   ```bash
   git clone https://github.com/Skolldar/apv-backend.git
   git clone https://github.com/Skolldar/apv-frontend.git
2. **Navigate to the backend folder:**
    ```bash
    cd apv-backend

3. **Install dependencies:**
   ```bash
     npm install
4.  **Set up environment variables:**
    - Create a `.env` file in the root of the `apv-backend` folder.
    - Add the following variables:
     ```bash
     MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    PORT=4000
5. **Run the backend server:**
   ```bash
   npm run dev
   
6. **Set up the frontend:**
  - Follow the instructions in the apv-frontend README.

## How to View the Project:

To access the project, follow these instructions:

1. Open your terminal and navigate to the `backend` folder of the project.
2. Once inside the `backend` folder, start running `npm run dev`.

## Project Usage 🐶

**Veterinary Patient Administration** is a simple and interactive website designed for veterinarians to manage their patients efficiently. Key features include:

### Admin Features:
- **User Authentication:**
  - Register, log in, and recover your account.
  [![Screenshot-from-2024-03-01-15-18-34.png](https://i.postimg.cc/sfJgVwsR/Screenshot-from-2024-03-01-15-18-34.png)](https://postimg.cc/s1vrmPMn)

- **Patient Management:**
  - Add, edit, and update patient records.
  [![Screenshot-from-2024-03-01-15-16-36.png](https://i.postimg.cc/HxH6dp9H/Screenshot-from-2024-03-01-15-16-36.png)](https://postimg.cc/8FKRbgYn)

---

## API Endpoints 📡

Here are the main API endpoints provided by the backend:

### Auth Routes:
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.
- `POST /api/auth/forgot-password`: Request a password reset.
- `POST /api/auth/reset-password`: Reset the user's password.

### Patient Routes:
- `GET /api/patients`: Fetch all patients.
- `POST /api/patients`: Add a new patient.
- `PUT /api/patients/:id`: Update a patient's details.
- `DELETE /api/patients/:id`: Delete a patient.

---

# How to Contribute 🤝
Contributions are welcome! If you'd like to improve this project, follow these steps:

1. Fork the repository.

2. Create a new branch (git checkout -b feature/new-feature).

3. Make and commit your changes (git commit -m 'Add new feature').

4. Push to the branch (git push origin feature/new-feature).

5. Open a Pull Request and describe your changes.

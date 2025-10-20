# Witch API with Express and Prisma

## Description

This project is a simple RESTful API built with **Express.js** and **Prisma ORM** to manage a list of witches ("bruxos" in Portuguese). It demonstrates how to set up an Express server, organize routes, controllers, and models, and interact with a database using Prisma for clean and efficient data querying.

---

## Features

- Express server with JSON parsing
- Environment variable configuration with dotenv
- Modular route handling for `/bruxos` endpoint
- Controllers to handle business logic and error handling
- Prisma ORM integration for database operations
- Basic CRUD read operations:
  - List all witches
  - Get a single witch by ID

---

## Project Structure

.
├── server.js # Entry point of the server
├── src/
│ ├── controllers/
│ │ └── bruxoController.js # Business logic and error handling
│ ├── models/
│ │ └── bruxoModel.js # Prisma database queries
│ └── routes/
│ └── bruxoRoutes.js # API routes for witches
├── .env # Environment variables (e.g., PORT, DATABASE_URL)
├── package.json
└── prisma/
└── schema.prisma # Prisma schema file

---
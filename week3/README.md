# Week 3: Express Backend, MongoDB Integration, and Authentication

This folder contains the assignments and operations performed during Week 3 of the Suntek MERN stack training. The week's focus was on building backend APIs using Express.js, connecting to a MongoDB database using Mongoose, and implementing user authentication.

## Folder Structure & Operations

### 1. `backend_1`
This folder contains the initial setup for an Express.js backend application.
- **`server.js`**: Sets up the HTTP server using Express, configured to listen on port 3000. It includes basic routing to direct requests to user and product APIs and basic middleware examples.
- **`APIs/`**:
  - `UserAPI.js`: Defines routes and handlers for user-related operations.
  - `ProductAPI.js`: Defines routes and handlers for product-related operations.
- **`testing.http`**: Contains HTTP requests to test the API endpoints using the REST Client extension.

### 2. `backend_2`
This folder builds upon the first part by integrating a database and adding authentication mechanisms.
- **`server.js`**: An advanced server setup that connects to a local MongoDB instance (`anuragdb2`) using Mongoose. It listens on port 4000. It also incorporates `cookie-parser` and a global error-handling middleware.
- **`Models/`**:
  - `UserModel.js`: Defines the Mongoose schema and model for users in the database.
  - `ProductModel.js`: Defines the Mongoose schema and model for products.
- **`MiddleWares/`**:
  - `verifyToken.js`: A custom middleware designed to verify JSON Web Tokens (JWT) for protected routes, ensuring secure access to specific API endpoints.
- **`APIs/`**:
  - `UserAPI.js`: Updated to handle database operations (registration, login) and likely issues JWTs upon successful authentication.
  - `ProductAPI.js`: Updated API endpoints for managing products, potentially using protected routes.
- **`testing.http`**: Contains comprehensive HTTP requests to test the database-integrated API endpoints and authentication flows.

## Key Concepts Learned
- Setting up and configuring Express.js servers.
- Organizing routes using Express Router (`UserAPI.js`, `ProductAPI.js`).
- Connecting an Express backend to MongoDB using Mongoose.
- Defining Mongoose schemas and models.
- Implementing authentication using JSON Web Tokens (JWT).
- Handling cookies with `cookie-parser`.
- Creating custom middlewares for token verification and global error handling.

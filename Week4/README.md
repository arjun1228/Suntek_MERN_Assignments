# Week 4: E-commerce Backend, Complex Mongoose Relationships

This folder contains the operations and assignments performed during Week 4 of the Suntek MERN stack training. The primary focus was on building a more complex E-commerce backend, implementing related Mongoose schemas (like User Carts), and advanced database operations like `populate`.

## Folder Structure

- **`E-commerce/`**: Contains the full backend codebase for the E-commerce application.
  - **`server.js`**: The main entry point. Sets up the Express server on port 5000, connects to a MongoDB database named `Ecomdb`, and registers the `user-api` and `product-api` routes. It also features a custom request logging middleware and a global error handler.
  - **`Models/`**: Contains Mongoose schemas and models (`UserModel.js`, `ProductModel.js`).
  - **`APIs/`**: Contains the route handlers (`UserAPI.js`, `ProductAPI.js`).
  - **`testing.http`**: Contains HTTP requests for testing the API endpoints using the REST Client extension.

## Models (`E-commerce/Models/`)

### 1. ProductModel (`ProductModel.js`)
Defines the Mongoose schema for the `product` collection.
- **`productName`**: String, required.
- **`price`**: Number, required.
- **`brand`**: String, required.
- Schema uses `{ strict: "throw", timestamps: true, versionKey: false }`.

### 2. UserModel (`UserModel.js`)
Defines the Mongoose schema for the `user` collection, incorporating a sub-document schema for the user's cart.
- **`name`**: String, required.
- **`email`**: String, required, unique.
- **`password`**: String, required.
- **`cart`**: An array of `cartSchema` objects. Each cart item has:
  - **`product`**: An `ObjectId` referencing the `product` model.
  - **`quantity`**: A Number with a default value of `1`.
- Schema uses `{ strict: "throw", timestamps: true, versionKey: false }`.

## Detailed API Routes (`E-commerce/APIs/`)

### Product Routes (`/product-api`)
Handles CRUD operations for products.
- **`GET /products`**: Retrieves all products from the database (`ProductModel.find()`).
- **`POST /products`**: Creates a new product and saves it to the database.
- **`GET /products/:id`**: Fetches a specific product by its ID.
- **`PUT /products/:id`**: Updates an existing product using `findByIdAndUpdate()`.
- **`DELETE /products/:id`**: Deletes a product using `findByIdAndDelete()`.

### User Routes (`/user-api`)
Handles user registration, retrieval, and complex cart operations.
- **`GET /users`**: Retrieves all registered users (`UserModel.find()`).
- **`POST /users` (User Registration)**: Registers a new user. It explicitly runs validators (`await new UserModel(newUser).validate()`), hashes the plain-text password using `bcryptjs`, and saves the user.
- **`GET /users/:uid`**: Fetches a single user by their ID. It uses Mongoose's `.populate("cart.product", "productName price quantity")` to replace the product ObjectIds in the user's cart with the actual product data.
- **`PUT /user-cart/user-id/:uid/product-id/:pid` (Add to Cart)**: A complex route that adds a product to a user's cart or increments its quantity if it's already there.
  - Verifies both the user and product exist.
  - Checks if the product is already in the `cart` array.
  - If **not found**: Uses MongoDB's `$push` operator to add a new cart item `{$push: {cart: {product: new Types.ObjectId(pid), quantity: 1}}}`.
  - If **found**: Uses MongoDB's `$inc` operator to increment the quantity `{$inc: {"cart.$.quantity": 1}}` using the positional `$` operator.
  - Uses `.populate()` before returning the modified user to show the full cart details.
- **`GET /compare/:pid`**: A test route demonstrating ObjectID vs String comparison.

## Key Concepts Covered
1. **Schema References**: Linking schemas using `Schema.Types.ObjectId` and `ref`.
2. **Mongoose Populate**: Using `.populate()` to automatically fetch referenced documents.
3. **Advanced MongoDB Update Operators**: Practical usage of `$push` for adding to arrays and `$inc` for incrementing values.
4. **Positional Operator (`$`)**: Updating specific elements within an array of objects.
5. **Pre-Save Validation**: Manually calling `.validate()` on a Mongoose document before modifying data (like hashing passwords) and bypassing automatic validation on save (`validateBeforeSave: false`).
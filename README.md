# User Authentication and Authorization with Bearer Token

This is a Node.js application that implements user authentication and authorization using Bearer tokens. It follows the MVC (Model-View-Controller) pattern and includes API documentation.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-repo/user-auth-bearer-token.git
```

2. Install dependencies:

```bash
cd user-auth-bearer-token
npm install
```

3. Set up the MongoDB connection URL in `.env` file.

```
MONGODB_URI=mongodb://localhost:27017/your-db-name
```

4. Start the server:

```bash
npm start
```

The server will start running on `http://localhost:3000`.

## API Documentation

The API documentation is available in Postman. You can import the collection and environment from the provided files:

- `postman_collection.json`
- `postman_environment.json`

The documentation includes detailed information about each API endpoint, sample requests, and expected responses.

## Features

- User registration
- User login
- Token-based authentication
- Protected routes

## Technologies Used

- Node.js
- Express.js
- Mongoose (MongoDB)
- JSON Web Tokens (JWT)
- Postman

## Project Structure

```
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── utils/
│   └── jwtUtils.js
├── index.js
├── package.json
└── README.md
```

- `controllers/`: Contains the logic for handling HTTP requests and responses.
- `middleware/`: Contains middleware functions for authentication and authorization.
- `models/`: Contains the Mongoose models for database schema.
- `routes/`: Contains the Express routes for handling different API endpoints.
- `utils/`: Contains utility functions for generating and verifying JWT tokens.
- `index.js`: The entry point of the application.
- `package.json`: Contains project dependencies and scripts.
- `README.md`: This file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

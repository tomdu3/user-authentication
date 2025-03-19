# User Authentication and Authorization with Bearer Token

This is a Node.js application that implements user authentication and authorization using Bearer tokens. It follows the MVC (Model-View-Controller) pattern and includes API documentation.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/tomdu3/user-authentication.git
```

2. Install dependencies:

```bash
cd user-auth-bearer-token
npm install
```

3. Set up `.env` file with environmental variables.

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/your-db-name
JWT_SECRET=your-secret-key
```

4. Start the server:

```bash
npm start
```
or
```bash
npm run dev  # starts nodemon in development mode
```

The server will start running on `http://localhost:3000`.

## API Documentation

The API documentation is available in Postman. You can import the collection and environment from the provided files:

- `REST_API_authentication_and_authorization.postman_collection.json`
-  `Auth.postman_environment.json` and `Auth-deployed.postman_environment.json` (local and deployed environment respectively).

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

## Deployment
The REST API is deployed on Render [https://authenticate-authorize.onrender.com](https://authenticate-authorize.onrender.com).

## Project Structure

```
├── controllers/
│   ├── authController.js
│   └── userController.js
├── middleware/
│   └── jwtMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── index.js
├── package.json
└── README.md
```

- `controllers/`: Contains the logic for handling HTTP requests and responses.
- `middleware/`: Contains middleware functions for authentication and authorization (generating and verifying JWT tokens).
- `models/`: Contains the Mongoose models for database schema.
- `routes/`: Contains the Express routes for handling different API endpoints.
- `index.js`: The entry point of the application.
- `package.json`: Contains project dependencies and scripts.
- `README.md`: This file.

## Postman Testing

To test the API endpoints, you can use Postman. Here's a brief guide on how to use the provided Postman collection and environment:

1.  **Import Collection and Environment**:
    *   Open Postman.
    *   Click on the "Import" button.
    *   Select the `REST_API_authentication_and_authorization.postman_collection.json` and `Auth.postman_environment.json` or 'Auth-deployed.postman_environment.json' files, for local or deployed environment respectively.

2.  **Set Environment Variables**:
    *   In Postman, select the imported environment (`postman_environment`).
    * **Base URL**: `{{base_url}}`:
        - **Local Environment**: `http://localhost:3000`
        - **Production Environment**: `https://authenticate-authorize.onrender.com`


3.  **Testing Endpoints**:
*   **Register User**:
    *   Select the "Register" request in the collection.
    *   In the "Body" tab, provide the `username`, `email`, and `password` in JSON format.
    *   Send the request. A successful registration will return a `201` status code.

```http
POST {{base_url}}/api/auth/register
Content-Type: application/json

{
  "username": "tomd",
  "email": "tomd@mail.com",
  "password": "password"
}
```

**Test Script**:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
```


*   **Login User**:
    *   Select the "Login" request.
    *   In the "Body" tab, provide the `username` or `email` and `password` of the registered user.
    *   Send the request. A successful login will return a `200` status code and a `token` in the response body.

```http
POST {{base_url}}/api/auth/login
Content-Type: application/json

{
    "username": "tom",
    "password": "password"
}
```

**Test Script**:
```javascript
pm.environment.set('TOKEN', pm.response.json().token)
```


*   **Get User Info**:
    *   Select the "Get User Info" request.
    *   In the "Headers" tab, add a new header with the key `Authorization` and the value `Bearer <your_token>`. Replace `<your_token>` with the token received from the login request.
    *   Send the request. A successful request will return a `200` status code and the user information.

```http
GET {{base_url}}/api/users/info
Authorization: Bearer {{TOKEN}}
```

## Testing Workflow

1. **Environment Setup**
   - Import the collection
   - Choose environment:
     * Local: `http://localhost:3000`
     * Production: `https://authenticate-authorize.onrender.com`
   - Set appropriate `base_url`

2. **Authentication Flow**
   - Register new user
   - Login to get token
   - Use token for authenticated requests

3. **Variable Management**
   - Environment variables:
     * `base_url`: Your selected environment URL
     * `TOKEN`: Automatically set after login

## Response Validation

- **Success Responses**: 
  * Status code 200
  * Valid JSON payload
  * Token present in login response

- **Error Handling**:
  * Authentication errors (401)
  * Validation errors (400)
  * Server errors (500)

## Postman Online Documentation

The link to the postman online API documentation can be found here: [https://documenter.getpostman.com/view/15625728/2sAYkEqzWt](https://documenter.getpostman.com/view/15625728/2sAYkEqzWt)

## Copyright

This project is licensed under the MIT License.
&copy; Tomislav Dukez 2025.
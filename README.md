# MEVN App

This is a MEVN-TODO App (MongoDB, Express, Vue.js, Node.js) application that consists of a separate backend API and frontend client.

## Backend (API)

The backend folder (`api`) contains the server-side code that handles data storage and provides the necessary APIs for the frontend to interact with the database(mongobd).

### Installation

1. Make sure you have Node.js and npm (Node Package Manager) installed.
2. Navigate to the `api` folder: `cd api`.
3. Install the required dependencies: `npm install`.

### Configuration

1. Create a `.env` file in the `api` folder.
2. Set the following environment variables in the `.env` file:
   - `PORT`: The port on which the backend server will run.
   - `MONGODB_URI`: The connection string for your MongoDB database.

### Usage

1. Start the backend server: `npm run dev`.
2. The API will be accessible at `http://localhost:3001/`.

## Frontend (Client)

The frontend folder (`client`) contains the Vue.js code that handles the user interface and communicates with the backend API.

### Installation

1. Make sure you have Node.js and npm (Node Package Manager) installed.
2. Navigate to the `client` folder: `cd client`.
3. Install the required dependencies: `npm install`.

### Configuration

The frontend client is configured to communicate with the backend API at `http://localhost:3001/`. You can change the API endpoint in the `client/src/api.js` file if needed.

### Usage

1. Start the frontend development server: `npm run dev`.
2. The client will be accessible at `http://localhost:5173/`.

## Additional Information

- The `api` folder contains Express.js routes and controllers for handling API endpoints.
- The `client` folder contains Vue.js components, views, and other frontend code.
- The backend and frontend are separate entities that communicate via HTTP requests.
- Make sure to start both the backend API and frontend client when developing or deploying the application.

Feel free to customize this `README.md` file with your own application-specific instructions and details.

Happy coding!

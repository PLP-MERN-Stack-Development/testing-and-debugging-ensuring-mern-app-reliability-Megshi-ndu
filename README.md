# MERN Bug Tracker

A simple bug tracking application built with the MERN stack (MongoDB, Express, React, Node.js). This project emphasizes a systematic approach to testing and debugging to ensure application reliability.

## Features

- Report new bugs via a form.
- View a list of all reported bugs.
- Update the status of a bug (e.g., open, in-progress, resolved).
- Delete bugs from the list.

## Project Structure

The project is a monorepo with two main folders:
- `/backend`: Contains the Express.js server, API routes, database models, and backend tests.
- `/frontend`: Contains the React application, components, services, and frontend tests.

## Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd mern-bug-tracker
    ```

2.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

4.  **Environment Variables:**
    Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    ```
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

## Running the Application

1.  **Start the backend server:**
    ```bash
    # From the backend/ directory
    npm start
    ```

2.  **Start the frontend development server:**
    ```bash
    # From the frontend/ directory
    npm start
    ```

## Running Tests

**Backend Tests:**

```bash
# From the backend/ directory
npm test
```

**Frontend Tests:**

```bash
# From the frontend/ directory
npm test
```

## Testing and Debugging Approach

### Testing Strategy

- **Unit Tests**: Individual functions (e.g., backend validation logic) and React components in isolation are tested using Jest and React Testing Library. Mocks are used to isolate dependencies.
- **Integration Tests**: API endpoints are tested using Supertest with an in-memory MongoDB database to ensure routes, controllers, and models work together correctly. Frontend integration tests verify that components correctly interact with mocked API services.
- **Coverage**: The goal is to maintain high test coverage on critical application logic, including helper functions, API controllers, and UI components with complex state.

### Debugging Techniques

- **Backend (Node.js)**: The server can be started in inspect mode (`node --inspect server.js`). The Chrome DevTools inspector can then be attached for setting breakpoints and stepping through server-side code.
- **Frontend (React)**: Chrome DevTools are used extensively for debugging:
  - **Console Logs**: For tracking variable values and component lifecycle.
  - **Network Tab**: For inspecting API request/response cycles.
  - **React DevTools Extension**: For inspecting component props and state hierarchies.
- **Error Handling**:
  - The backend uses a global Express error handling middleware to catch and log all server errors consistently.
  - The frontend uses a React `ErrorBoundary` component to prevent the entire application from crashing due to a UI rendering error, providing a better user experience.
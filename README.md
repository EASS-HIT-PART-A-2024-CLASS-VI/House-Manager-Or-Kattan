# House Task Manager

This project is a house task manager application with a microservices architecture.

##

Project video - https://www.youtube.com/watch?v=zMACsope-es&t=64s

## Services

- **Auth Service**: Handles authentication.
- **Task Service**: Manages tasks.
- **Notification Service**: Manages notifications.
- **Frontend**: User interface for the application.
- **MongoDB**: Database for storing data.

## File Tree

```
House-Manager-Or-Kattan/
├── backend/
│   ├── auth-service/
│   │   ├── main.py
│   │   ├── routers/
│   │   │   └── auth.py
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   ├── notification-service/
│   │   ├── main.py
│   │   ├── .env
│   │   ├── requirements.txt
│   │   └── Dockerfile
│   ├── task-service/
│   │   ├── main.py
│   │   ├── requirements.txt
│   │   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── Dockerfile
├── .env
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Prerequisites

- Docker
- Docker Compose

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```properties
MONGO_URI=mongodb://mongo-db:27017
JWT_SECRET_KEY=your_jwt_secret_key
```

Create a `.env` file in the `backend/notification-service` directory and add the following environment variables:

```properties
SENDER_EMAIL=your_email@example.com
SENDER_PASSWORD=your_email_password
```

## Running the Project

To run the project, use Docker Compose:

```sh

git clone https://github.com/EASS-HIT-PART-A-2024-CLASS-VI/House-Manager-Or-Kattan.git
cd House-Manager-Or-Kattan
docker-compose up --build
```

## API Endpoints

### Auth Service

- **POST /register**: Register a new user.
- **POST /login**: Login a user and get an access token.
- **GET /users/me**: Get the current user's profile.
- **PUT /users/me**: Update the current user's profile.
- **PUT /users/me/password**: Update the current user's password.
- **GET /users**: Get a list of all users (protected endpoint).

### Task Service

- **GET /tasks**: Get a list of tasks.
- **POST /tasks**: Create a new task.
- **PUT /tasks/{task_id}**: Update a task.
- **DELETE /tasks/{task_id}**: Delete a task.

### Notification Service

- **POST /send-email**: Send an email notification.

## Frontend

The frontend is a React application that interacts with the backend services.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
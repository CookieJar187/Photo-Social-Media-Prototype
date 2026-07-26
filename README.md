# Photo Social Media Prototype

A full-stack photo-focused social media prototype built with React, Express.js, and PostgreSQL.

The application supports features such as user authentication, post creation, comments, and user connections.

## Technologies

* React
* Express.js
* PostgreSQL
* JSON Web Tokens
* HTTP-only cookies

## Local Setup

### Prerequisites

Before running the project, make sure the following are installed:

* [Node.js](https://nodejs.org/)
* npm
* [PostgreSQL](https://www.postgresql.org/)

### 1. Clone the repository

```bash
git clone https://github.com/CookieJar187/Photo-Social-Media-Prototype.git
cd Photo-Social-Media-Prototype
```

### 2. Install the frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install the backend dependencies

From the `frontend` directory:

```bash
cd ../backend
npm install
```

### 4. Create the PostgreSQL database

Create a PostgreSQL database named `social_media`:

```bash
psql -U postgres -c "CREATE DATABASE social_media;"
```

Then import the provided database schema.

From the `backend` directory:

```bash
psql -U postgres -d social_media -f database/schema.sql
```

The schema creates the tables required by the application, including:

* `users`
* `posts`
* `comments`
* `follows`

You can also create the database and import the schema through pgAdmin.

### 5. Configure the backend environment

Inside the `backend` directory, copy `.env.example` and rename the copy to `.env`.

On Windows Command Prompt:

```cmd
copy .env.example .env
```

On macOS, Linux, or Git Bash:

```bash
cp .env.example .env
```

Update the values in `.env` to match your PostgreSQL configuration:

```env
ACCESS_TOKEN_SECRET=replace_with_a_secure_random_value
REFRESH_TOKEN_SECRET=replace_with_another_secure_random_value
DB_HOST=localhost
DB_PORT=5432
DB_NAME=social_media
DB_USER=your_username
DB_PASSWORD=your_password
```

### 6. Start the backend

From the `backend` directory:

```bash
npm run devStart
```

### 7. Start the frontend

Open a second terminal and navigate to the frontend directory from the project root:

```bash
cd frontend
npm run dev
```

The terminal will display the local address used by the React development server, commonly:

```text
http://localhost:5173
```

The frontend server, backend server, and PostgreSQL database must all be running for the application to work correctly.

## Current Project Status

This project is still under development. Core functionality is implemented and presentable, but features may be incomplete or subject to change.
Deployed_Link: https://vijayganesh-lab-1.onrender.com/
# Lab 1: Node.js and Express Server

## Student Details

- **Name:** Vijay Ganesh Bonthala
- **Course:** B.Tech – Computer Science and Engineering
- **Year:** II Year
- **Section:** 106 CSE-AIDE(2A)
- **Subject:** Backend Development Fundamentals
- **Lab Number:** 01

## Project Overview

This project demonstrates the fundamentals of Node.js and Express.js by creating a basic web server. First, a server is developed using Node.js's built-in HTTP module. Then, the server is implemented using Express.js with multiple routes to handle HTTP requests and responses.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- npm (Node Package Manager)
- Visual Studio Code

## Project Structure

```text
lab-01/
│
├── app.js
├── plain-server.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md
└── screenshots/
    ├── home.png
    ├── about.png
    ├── time.png
    └── not-found.png
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/vijayganeshb21-hub/Vijayganesh_Lab_1.git
```

### 2. Navigate to the Project Folder

```bash
cd Vijayganesh_Lab_1
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Express Server

```bash
npm start
```

The server runs at:

`http://localhost:3000`

### 5. Run the Plain Node.js HTTP Server

```bash
npm run start:http
```

Note: Stop the Express server before starting the plain HTTP server because both use port 3000 by default.

## API Endpoints

| HTTP Method | Endpoint | Description | Status Code |
|---|---|---|---|
| GET | `/` | Displays a welcome message | 200 OK |
| GET | `/about` | Returns student name and section in JSON format | 200 OK |
| GET | `/time` | Returns the current server date and time | 200 OK |
| GET | `/unknown` | Displays a 404 error for an unknown route | 404 Not Found |

## Screenshots

### 1. Home Route

Displays the welcome message.


<img width="959" height="474" alt="image" src="https://github.com/user-attachments/assets/32accde6-4d1f-46cb-a581-df08de901351" />

### 2. About Route

Displays student information in JSON format.

<img width="959" height="479" alt="image" src="https://github.com/user-attachments/assets/5b6f3160-8ce9-4aa4-a9c5-8297ef615947" />


### 3. Time Route

Displays the current date and time.

<img width="959" height="473" alt="image" src="https://github.com/user-attachments/assets/968306cf-1376-48c8-ba1a-c0db4b5b58eb" />


### 4. 404 Not Found

Displays an error message for an invalid route.

<img width="959" height="473" alt="image" src="https://github.com/user-attachments/assets/0cf986f7-adb8-4e94-bff5-60c185efa873" />


## Viva Questions and Answers

**1. What is the difference between package.json and node_modules?**

`package.json` contains project information and dependencies, whereas `node_modules` contains the actual installed packages.

**2. What does app.listen() do?**

The `app.listen()` method starts the Express server and listens for incoming requests on a specified port.

**3. What do request and response represent?**

- `request (req)`: Contains information sent by the client to the server.
- `response (res)`: Used by the server to send data and status codes back to the client.

## Learning Outcomes

- Understood the basics of Node.js and Express.js.
- Learned how to initialize a Node.js project using npm.
- Created a basic HTTP server using the built-in HTTP module.
- Developed an Express server.
- Learned how to create and handle GET routes.
- Understood HTTP status codes and 404 error handling.
- Tested API endpoints using a web browser.

## Author

**Vijay Ganesh Bonthala**

B.Tech – Computer Science and Engineering  
II Year – Aritifical Data Engineering
Section - 106-2A



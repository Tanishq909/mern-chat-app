# mern-chat-app
A full-stack chat application built with the MERN stack, featuring real-time messaging, user authentication, media upload/download, and responsive design.


# MERN Chat App

A full-stack chat application built with the MERN stack, featuring real-time messaging, user authentication, media upload/download, and responsive design.

## Features

- **Real-time Messaging**: Send and receive messages instantly using Socket.IO.
- **User Authentication**: Secure user authentication with Google OAuth.
- **Media Upload/Download**: Upload and download images and files.
- **Profile Management**: Manage user profiles with profile pictures and status.
- **Responsive Design**: Fully responsive design for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Vite, Material-UI
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Real-time Communication**: Socket.IO
- **File Storage**: GridFS, Multer
- **Authentication**: Google OAuth

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Tanishq909/mern-chat-app.git
    ```

2. Install dependencies for both client and server:
    ```sh
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Create a `.env` file in both `client` and `server` directories and add the necessary environment variables.

4. Start the development servers:
    ```sh
    cd client
    npm run dev
    cd ../server
    npm start
    ```

5. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Project Structure

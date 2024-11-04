# MERN Chat App - Server

This is the backend part of the MERN Chat App, built using Node.js, Express, and MongoDB. The server handles user authentication, real-time messaging, and media file storage.

## Features

- **Real-time Messaging**: Send and receive messages instantly using Socket.IO.
- **User Authentication**: Secure user authentication with Google OAuth.
- **Media Upload/Download**: Upload and download images and files.
- **Profile Management**: Manage user profiles with profile pictures and status.

## Technologies Used

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

2. Navigate to the `server` directory:
    ```sh
    cd server
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the `server` directory and add the necessary environment variables:
    ```env
    DB_URL=mongodb://localhost:27017/mernstack
    CLIENT_URL=http://localhost:5173
    ```

5. Start the server:
    ```sh
    npm start
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

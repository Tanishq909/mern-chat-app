# MERN Chat App - Client

This is the frontend part of the MERN Chat App, built using React, Vite, and Material-UI. The application allows users to send and receive messages in real-time, upload and download media files, and manage user profiles.

## Features

- **Real-time Messaging**: Send and receive messages instantly using Socket.IO.
- **User Authentication**: Secure user authentication with Google OAuth.
- **Media Upload/Download**: Upload and download images and files.
- **Profile Management**: Manage user profiles with profile pictures and status.
- **Responsive Design**: Fully responsive design for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Vite, Material-UI
- **Real-time Communication**: Socket.IO
- **Authentication**: Google OAuth

## Getting Started

### Prerequisites

- Node.js

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Tanishq909/mern-chat-app.git
    ```

2. Navigate to the `client` directory:
    ```sh
    cd client
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Create a `.env` file in the `client` directory and add the necessary environment variables:
    ```env
    VITE_API_URL=http://localhost:8080
    VITE_SOCKET_URL=http://localhost:8080
    VITE_GOOGLE_CLIENT_ID=your-google-client-id
    ```

5. Start the development server:
    ```sh
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Project Structure
client/ .env .gitignore eslint.config.js index.css index.html package.json public/ README.md src/ App.css App.jsx components/ constants/ context/ index.css main.jsx service/ utils/ vite.config.js



## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.

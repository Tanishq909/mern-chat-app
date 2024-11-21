# MERN Chat App
A real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that enables instant messaging, file sharing, and user authentication.

![WhatsApp Clone](https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)

## Table of Contents
- [Description](#description)
- [Live Demo](#live-demo)
- [Features](#features)
- [Tech Stack & Tools](#tech-stack--tools)
- [Installation](#installation)
- [Usage](#usage)
- [Languages Used](#languages-used)
- [Packages Used](#packages-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)


## Description
A feature-rich chat application that provides real-time messaging capabilities, user authentication via Google OAuth, media file sharing, and responsive design for seamless communication across devices.

## Live Demo
- Frontend: [https://mern-chat-app-by-tanishq.vercel.app/](https://mern-chat-app-by-tanishq.vercel.app/)
- Backend: [https://mern-chat-app-uebw.onrender.com](https://mern-chat-app-uebw.onrender.com)

## Features
- **Real-time Messaging**: Instant message delivery using Socket.IO
- **Google Authentication**: Secure user authentication
- **File Sharing**: Upload and download media files
- **Profile Management**: Update profile pictures and status
- **Online Status**: Real-time user online/offline status
- **Message Status**: Message sent/delivered/read indicators
- **Responsive Design**: Works on both desktop and mobile devices

## Tech Stack & Tools
### Frontend
- React.js with Vite
- Material-UI for styling
- Socket.IO Client for real-time communication
- Google OAuth for authentication

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- Socket.IO for real-time features
- GridFS for file storage
- JWT for authentication

##Mixed
- **Frontend**: React, Vite, Material-UI
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Real-time Communication**: Socket.IO
- **File Storage**: GridFS, Multer
- **Authentication**: Google OAuth

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Tanishq909/mern-chat-app.git

2. Install dependencies:
   ```sh
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install

3. Set up environment variables:
Create .env in client directory :
   ```sh
   VITE_API_URL=http://localhost:8080
   VITE_SOCKET_URL=http://localhost:8080
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
Create .env in server directory :
   ```sh
   DB_URL=your-mongodb-url
   CLIENT_URL=http://localhost:5173 
   ```

4. Start the application:
   ```sh
   # Start client
   cd client
    npm run dev
    
    # Start server
    cd ../server
    npm start
    ```

## Usage

1. Login using Google Authentication.  
2. Select a contact to start chatting.  
3. Send text messages and media files in real-time.  
4. View online/offline status of contacts.  
5. Upload and update profile pictures.  

## Languages Used

- **JavaScript (ES6+)**  
- **HTML5**  
- **CSS3**  
- **JSX**  

## Packages Used

### Frontend
- **@mui/material**: Material-UI components  
- **@react-oauth/google**: Google authentication  
- **socket.io-client**: Real-time communication  
- **axios**: HTTP client  
- **jwt-decode**: JWT token decoder  

### Backend
- **express**: Web framework  
- **mongoose**: MongoDB object modeling  
- **socket.io**: Real-time engine  
- **multer**: File upload handling  
- **gridfs-stream**: File storage  
- **cors**: Cross-origin resource sharing  
- **dotenv**: Environment variables  

## Project Structure
The project is divided into two main parts: client (frontend) and server (backend). Below is the directory structure:
### Client
client/ <br>
  ├── public/                  <br>
  ├── src/                      <br>
  │   ├── components/           <br>
  │   ├── context/             <br>
  │   ├── service/           <br>
  │   └── utils/           <br>
  └── package.json          <br>

### Server
server/ <br>
  ├── controller/           <br>
  ├── model/               <br>
  ├── routes/              <br>
  ├── utils/                <br>
  └── package.json          <br>

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author

**Tanishq Kumar**  

- **Portfolio**: [https://tanishqkumar.vercel.app/](https://tanishqkumar.vercel.app/)  
- **GitHub**: [@Tanishq909](https://github.com/Tanishq909)


## Acknowledgments

- **Socket.IO** for real-time communication  
- **Material-UI** for the user interface  
- **MongoDB Atlas** for database hosting  
- **Vercel** and **Render** for deployment  


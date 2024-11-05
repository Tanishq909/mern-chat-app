import { createContext, useState , useRef , useEffect } from "react";

import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account,setAccount] = useState();
    const [person,setPerson] = useState({});
    const [activeUsers,setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();

    // useEffect(() => {
    //     socket.current = io(import.meta.env.VITE_SOCKET_URL);   
    // },[]);

    useEffect(() => {
        // Initialize socket connection
        socket.current = io(import.meta.env.VITE_SOCKET_URL, {
            transports: ['websocket'],
            reconnection: true,
            reconnectionAttempts: 5,
            reconnectionDelay: 1000,
        });

        // Handle connection errors
        socket.current.on('connect_error', (error) => {
            console.log('Socket connection error:', error);
        });

        // Cleanup on unmount
        return () => {
            if (socket.current) {
                socket.current.disconnect();
            }
        };
    }, []);

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;
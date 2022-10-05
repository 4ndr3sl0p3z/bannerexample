import React, { createContext } from 'react';
import config from '../config';
import { useSocket } from '../hooks/socket/useSocket';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online } = useSocket(config.productionSocket);
    const { socket: socketSSIPRO, online: onlineSSIPRO } = useSocket(config.ssiproSocket)

    return (
        <SocketContext.Provider
         value={{ 
            socket, online,
            socketSSIPRO, onlineSSIPRO
        }}
        >
            { children }
        </SocketContext.Provider>
    )
}


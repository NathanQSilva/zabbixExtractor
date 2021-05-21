//// External imports
import axios from 'axios';
import { createContext, useState, ReactNode, useContext } from 'react';

//// Types


// Type for all exports of context
type RequestsContextData = {
}

//Type for context access in all code
type RequestsContextProviderProps = {
    children: ReactNode;
}

// Creation of context
export const RequestsContext = createContext({} as RequestsContextData);

// Creation of consts and functions shared
export function RequestsContextProvider({ children }: RequestsContextProviderProps) {
    
   

    return (
        <RequestsContext.Provider
            value = {{
            }}
        >
            {children}
        </RequestsContext.Provider>

    )
    
}

export const useRequests = () => {
    return useContext(RequestsContext);
}
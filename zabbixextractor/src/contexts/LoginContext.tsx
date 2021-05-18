//// External imports
import axios from 'axios';
import { createContext, useState, ReactNode, useContext } from 'react';

//// Types
// Type for data in login process 
type valuesData = {
    user: string;
    password: string;
    server: string;
}

// Type for all exports of context
type LoginContextData = {
    GetLoginKey: (formValues: valuesData) => void;
    zabbixKey: string;
    zabbixServer: string;
}

//Type for context access in all code
type LoginContextProviderProps = {
    children: ReactNode;
}

// Creation of context
export const LoginContext = createContext({} as LoginContextData);

// Creation of consts and functions shared
export function LoginContextProvider({ children }: LoginContextProviderProps) {
    const [ zabbixKey, setZabbixKey ] = useState('')
    const [ zabbixServer, setZabbixServer ] = useState('')

    function GetLoginKey(formValues: valuesData) {
        axios({
            url: formValues.server,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
               "jsonrpc": "2.0",
                "method": "user.login",
                "params": {
                    "user": formValues.user,
                    "password": formValues.password
                },
                "id": 1,
                "auth": null
            })
        })
        .then((response) => {
            // Save key in state
            setZabbixKey(response.data.result)
        })
        // Save server in state
        setZabbixServer(formValues.server)
    }

    return (
        <LoginContext.Provider
            value = {{
                GetLoginKey,
                zabbixKey,
                zabbixServer,
            }}
        >
            {children}
        </LoginContext.Provider>

    )
    
}

export const useLogin = () => {
    return useContext(LoginContext);
}
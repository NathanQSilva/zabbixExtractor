// External importations
import axios from 'axios';
import { createContext, useState, ReactNode, useContext } from 'react';

// Types
type valuesData = {
    user: string;
    password: string;
    server: string;
}

type LoginContextData = {
    GetLoginKey: (formValues: valuesData) => void;
    zabbixKey: string;
}

type LoginContextProviderProps = {
    children: ReactNode;
}

// Creation of context
export const LoginContext = createContext({} as LoginContextData);

// Creation of consts and functions shared
export function LoginContextProvider({ children }: LoginContextProviderProps) {
    const [ zabbixKey, setZabbixKey ] = useState('key')
    

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
            setZabbixKey(response.data.result)
        })
    }

    return (
        <LoginContext.Provider
            value = {{
                GetLoginKey,
                zabbixKey,
            }}
        >
            {children}
        </LoginContext.Provider>

    )
    
}

export const useLogin = () => {
    return useContext(LoginContext);
}
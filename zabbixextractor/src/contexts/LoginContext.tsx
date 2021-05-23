//// External imports
import axios from 'axios';
import { createContext, useState, ReactNode, useContext } from 'react';
import Router from 'next/router';

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
    LogOut: () => void;
    saved: boolean;
}

//Type for context access in all code
type LoginContextProviderProps = {
    children: ReactNode;
}

// Creation of context
export const LoginContext = createContext({} as LoginContextData);

// Creation of consts and functions shared
export function LoginContextProvider({ children }: LoginContextProviderProps) {
    const [ saved, setSaved ] = useState(false)

    var CryptoJS = require("crypto-js");

    function LogOut() {
        setSaved(false),
        sessionStorage.removeItem("zabbixKey")
        sessionStorage.removeItem("zabbixServer")
        Router.push('/')
    }

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
            sessionStorage.setItem("zabbixKey", CryptoJS.AES.encrypt(response.data.result, 'Z@bb1x3xtr@ct0r').toString())
            setSaved(true)
            sessionStorage.setItem("zabbixServer", CryptoJS.AES.encrypt(formValues.server, 'Z@bb1x3xtr@ct0r').toString())
        })
    }

    return (
        <LoginContext.Provider
            value = {{
                GetLoginKey,
                saved,
                LogOut,
            }}
        >
            {children}
        </LoginContext.Provider>

    )
    
}

export const useLogin = () => {
    return useContext(LoginContext);
}
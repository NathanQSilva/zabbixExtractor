//// External imports
import axios from 'axios';
import { createContext, useState, ReactNode, useContext } from 'react';

//// Internal imports

//// Types
type dataChart = {
    x: number;
    y: number;
}

// Type for all exports of context
type RequestsContextData = {
    HistoryGet:  () => void;
    rawData: dataChart[];
}

//Type for context access in all code
type RequestsContextProviderProps = {
    children: ReactNode;
}

// Creation of context
export const RequestsContext = createContext({} as RequestsContextData);

// Creation of consts and functions shared
export function RequestsContextProvider({ children }: RequestsContextProviderProps) {
    const [ rawData, setRawData ] = useState([])

    function convertData(arr) {
        return arr.map( obj => {
            return {
                x: obj.clock,
                y: obj.value
            };
        });
    }

    function DecryptData(data: string) {
        var CryptoJS = require("crypto-js");

        var bytes = CryptoJS.AES.decrypt(data, 'Z@bb1x3xtr@ct0r');
        var dataDecrypted = bytes.toString(CryptoJS.enc.Utf8);

        return (dataDecrypted)
    }

    function HistoryGet() {
        axios({
            url: DecryptData(sessionStorage.getItem("zabbixServer")),//zabbixServer,//
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            data: JSON.stringify({
                "jsonrpc": "2.0",
                "method": "history.get",
                "params": {
                    "output": [
                                "clock",
                                "value"
                            ],
                    "history": 0,
                    "itemids": "29177",
                    "sortfield": "clock",
                    "sortorder": "DESC",
                    "limit": 10000
                },
                "auth": DecryptData(sessionStorage.getItem("zabbixKey")),//zabbixKey,//
                "id": 1
            })
        })
        .then((response) => {
            setRawData(convertData(response.data.result))
        })
    }

    return (
        <RequestsContext.Provider
            value = {{
                HistoryGet,
                rawData,
            }}
        >
            {children}
        </RequestsContext.Provider>

    )
    
}

export const useRequests = () => {
    return useContext(RequestsContext);
}
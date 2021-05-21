//// External imports
import axios from 'axios';
import { createContext, useState, ReactNode, useContext } from 'react';

//// Internal imports
import { useLogin } from './LoginContext';

//// Types
type dataChart = {
    x: number;
    y: number;
}

// Type for all exports of context
type RequestsContextData = {
    HistoryGet:  () => void;
    dados: dataChart[];
}

//Type for context access in all code
type RequestsContextProviderProps = {
    children: ReactNode;
}

// Creation of context
export const RequestsContext = createContext({} as RequestsContextData);

// Creation of consts and functions shared
export function RequestsContextProvider({ children }: RequestsContextProviderProps) {
    const [ dados, setDados ] = useState([])

    const {
        zabbixKey,
        zabbixServer,
    } = useLogin()

    function convertData(arr) {
        return arr.map( obj => {
            return {
                x: obj.clock,
                y: obj.value
            };
        });
    }

    function HistoryGet() {
        axios({
            url: 'http://172.16.174.150/api_jsonrpc.php',//zabbixServer,
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
                    "limit": 10
                },
                "auth": '779c894ba3f23cd4c6769bd47cb61ce5',//zabbixKey,
                "id": 1
            })
        })
        .then((response) => {
            setDados(convertData(response.data.result))
        })
    }

    return (
        <RequestsContext.Provider
            value = {{
                HistoryGet,
                dados,
            }}
        >
            {children}
        </RequestsContext.Provider>

    )
    
}

export const useRequests = () => {
    return useContext(RequestsContext);
}
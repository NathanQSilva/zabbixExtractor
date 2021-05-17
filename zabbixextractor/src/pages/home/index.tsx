// External imports
import React, { useState } from 'react';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import axios from 'axios';

// Internal imports
import { useLogin } from "../../contexts/LoginContext"

export default function loginPage() {
    const {
        zabbixKey,
    } = useLogin()

    const [ data, setData ] = useState([{'x': 1, 'y':2}, {'x': 2, 'y': 4}, {'x': 3, 'y': 3}])

    function HistoryGet() {
        axios({
            url: 'http://172.16.174.150/api_jsonrpc.php',
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
                    "itemids": "29200",
                    "sortfield": "clock",
                    "sortorder": "DESC",
                    "limit": 10
                },
                "auth": "77904f23f456ac6ff847bac8776f883d",
                "id": 1
            })
        })
        .then((response) => {
            console.log(response.data.result)
        })
    }

    


    return (
        <div>
            <button onClick={HistoryGet}>
                Chamada
            </button>
            <XYPlot width={300} height={300}>
                <XAxis />
                <YAxis />
                <LineSeries data={data} />
            </XYPlot>
        </div>
    )
}
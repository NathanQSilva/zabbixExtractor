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

    const [ data, setData ] = useState([])

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
                    "itemids": "29177",
                    "sortfield": "clock",
                    "sortorder": "DESC",
                    "limit": 10000
                },
                "auth": zabbixKey,
                "id": 1
            })
        })
        .then((response) => {
            setData(convertData(response.data.result))
        })
    }

    return (
        <div>
            <button onClick={HistoryGet}>
                Chamada
            </button>
            <XYPlot height={720} width= {1080}>
                <LineSeries data={data} />
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
            </XYPlot>
        </div>
    )
}
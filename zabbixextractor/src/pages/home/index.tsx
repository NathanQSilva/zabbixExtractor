// External imports
import React, { useState } from 'react';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';
import axios from 'axios';

// Internal imports
import { useLogin } from "../../contexts/LoginContext";
import { Head } from '../../components/Header/index';

export default function homePage() {
    const {
        zabbixKey,
        zabbixServer,
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
            url: zabbixServer,
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
        <Head>
            <div>
                HOME
            </div>
        </Head>
    )
}
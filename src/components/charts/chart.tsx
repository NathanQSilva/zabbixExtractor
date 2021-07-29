import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import styles from './chart.module.scss'

function Chart(props) {
    
    const rawData = { 
        labels: props.labels,
        datasets: [
            {
                label: props.graphName,
                data:props.data,
                fill: false,
                backgroundColor: props.color,
                borderColor: props.borderColor
            },
        ],
    };

    return (
        <div className={styles.chart}>
            <div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
                    </svg>
                </button>
            </div>
            <Line
                data={rawData}
                options={{ maintainAspectRatio: false }} 
            />
        </div>
    )
}

export default Chart;
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
            <Line
                data={rawData}
                options={{ maintainAspectRatio: false }} 
            />
        </div>
    )
}

export default Chart;
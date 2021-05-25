import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

import styles from './chart.module.scss'

const rawData = { 
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label:'# of votes',
            data:[2, 5, 3, 6, 8, 1],
            fill: false,
            backgroundColor: 'rgba(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)'
        },
    ],
};


class Chart extends Component {
    render() {
        return (
            <div className={styles.chart}>
                <Line
                    type={Line}
                    data={rawData}
                    options={{ maintainAspectRatio: false }} 
                />
            </div>
        )
    }
}

export default Chart;
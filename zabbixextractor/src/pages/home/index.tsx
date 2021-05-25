// External imports
import React, { useEffect } from 'react';

// Internal imports
import { useRequests } from "../../contexts/RequestsContext"
import { Head } from '../../components/Header/index';
import styles from './index.module.scss'

import Chart from '../../components/charts/chart'

export default function homePage() {
    useEffect(() => {
        HistoryGet()
    })

    const {
        HistoryGet,
        rawData
    } = useRequests()

    function GenerateColor(opacity = 1) {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    return (
        <Head>
            <div className={styles.homeContainer}>
                <div className={styles.dashTop}>
                    <Chart 
                        labels={['1', '2', '3', '4', '5', '6']}
                        graphName="teste 1"
                        data={[1, 2, 4, 3, 7, 4]}
                        color={GenerateColor()}
                        borderColor={GenerateColor(0.6)}
                    />
                </div>
                <div className={styles.dashLineTop}>
                    <div className={styles.topLeft}>
                        <Chart 
                            labels={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                            graphName="teste 2"
                            data={[4, 2, 1, 7, 5, 9, 3, 5, 1, 2]}
                            color={GenerateColor()}
                            borderColor={GenerateColor(0.6)}
                        />
                    </div>
                    <div className={styles.topRight}>
                        <Chart 
                            labels={['1', '2', '3', '4', '5', '6']}
                            graphName="teste 3"
                            data={[9, 8, 7, 9, 7, 10]}
                            color={GenerateColor()}
                            borderColor={GenerateColor(0.6)}
                        />                       
                    </div>
                </div>
                <div className={styles.dashLineBottom}>
                    <div className={styles.bottomLeft}>
                        <Chart
                            labels={['1', '2', '3', '4', '5', '6']}
                            graphName="teste 4"
                            data={[8, 10, 6, 2, 8, 4]}
                            color={GenerateColor()}
                            borderColor={GenerateColor(0.6)}
                        />
                    </div>
                    <div className={styles.bottomRight}>
                        <Chart
                            labels={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
                            graphName="teste 5"
                            data={[7, 1, 10, 7, 7, 7, 4, 10, 3, 8]}
                            color={GenerateColor()}
                            borderColor={GenerateColor(0.6)}
                        />
                    </div>
                </div>
            </div>
        </Head>
    )
}
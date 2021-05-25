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

    return (
        <Head>
            <div className={styles.homeContainer}>
                <div className={styles.dashTop}>
                    <Chart />
                </div>
                <div className={styles.dashLineTop}>
                    <div className={styles.topLeft}>
                        teste
                    </div>
                    <div className={styles.topRight}>
                        teste 2                        
                    </div>
                </div>
                <div className={styles.dashLineBottom}>
                    <div className={styles.bottomLeft}>
                        teste 3
                    </div>
                    <div className={styles.bottomRight}>
                        teste 4
                    </div>
                </div>
            </div>
        </Head>
    )
}
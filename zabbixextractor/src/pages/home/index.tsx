// External imports
import React, { useEffect } from 'react';
import { XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

// Internal imports
import { useRequests } from "../../contexts/RequestsContext"
import { Head } from '../../components/Header/index';
import styles from './index.module.scss'

export default function homePage() {
    const {
        HistoryGet,
        dados
    } = useRequests()

    useEffect(() => {
        HistoryGet
    })

    return (
        <Head>
            <div className={styles.homeContainer}>
                <div className={styles.dashTop}>
                    <XYPlot height={300} width= {300}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis />
                        <YAxis />
                        <LineSeries data={dados} />
                    </XYPlot>
                </div>
                <div className={styles.dashLineTop}>
                    <div className={styles.topLeft}>
                        <XYPlot height={300} width= {300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <LineSeries data={dados} />
                        </XYPlot>
                    </div>
                    <div className={styles.topRight}>
                        <XYPlot height={300} width= {300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <LineSeries data={dados} />
                        </XYPlot>
                    </div>
                </div>
                <div className={styles.dashLineBottom}>
                    <div className={styles.bottomLeft}>
                        <XYPlot height={300} width= {300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <LineSeries data={dados} />
                        </XYPlot>
                    </div>
                    <div className={styles.bottomRight}>
                        <XYPlot height={300} width= {300}>
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <LineSeries data={dados} />
                        </XYPlot>
                    </div>
                </div>
            </div>
        </Head>
    )
}
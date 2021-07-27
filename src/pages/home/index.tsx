// External imports
import React, { useEffect } from 'react';
import GridLayout from 'react-grid-layout';
import Chart from '../../components/charts/chart'

// Internal imports
import { useRequests } from "../../contexts/RequestsContext"
import { Head } from '../../components/Header/index';

// Styles
import styles from './index.module.scss'
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"


export default function homePage() {
    useEffect(() => {
        HistoryGet()
    })

    const {
        HistoryGet,
        rawData
    } = useRequests()

    const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2},
        {i: 'b', x: 1, y: 0, w: 3, h: 2},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];

    function GenerateColor(opacity = 1) {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    return (
        <Head>
            <div className={styles.homeContainer}>
                <GridLayout
                    className="layout" 
                    layout={layout} 
                    cols={12} 
                    rowHeight={30} 
                    width={1630}
                >
                    <div key="a">
                        <div className={styles.graph}>
                            <Chart 
                                labels={['1', '2', '3', '4', '5', '6']}
                                graphName="teste 1"
                                data={[1, 2, 4, 3, 7, 4]}
                                color={GenerateColor()}
                                borderColor={GenerateColor(0.6)}
                            />
                        </div>
                    </div>
                    <div key="b">
                        <div className={styles.graph}>
                            <Chart 
                                labels={['1', '2', '3', '4', '5', '6']}
                                graphName="teste 1"
                                data={[1, 2, 4, 3, 7, 4]}
                                color={GenerateColor()}
                                borderColor={GenerateColor(0.6)}
                            />
                        </div>
                    </div>
                    <div key="c">
                        <div className={styles.graph}>
                            <Chart 
                                labels={['1', '2', '3', '4', '5', '6']}
                                graphName="teste 1"
                                data={[1, 2, 4, 3, 7, 4]}
                                color={GenerateColor()}
                                borderColor={GenerateColor(0.6)}
                            />
                        </div>
                    </div>
                </GridLayout>
            </div>
        </Head>
    )
}
// External imports
import React, { useEffect } from 'react';

// Internal imports
import { useRequests } from "../../contexts/RequestsContext"
import { Head } from '../../components/Header/index';
import { HomeDashboard } from '../../components/HomeDashboard';

// Styles
import styles from './index.module.scss'


export default function homePage() {
    useEffect(() => {
        HistoryGet()
    })

    const {
        HistoryGet,
    } = useRequests()

    return (
        <Head>
            <div className={styles.homeContainer}>
                <HomeDashboard />
            </div>
        </Head>
    )
}
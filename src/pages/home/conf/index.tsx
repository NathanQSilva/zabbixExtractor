//// External imports
import React from 'react';
import { useFormik } from 'formik';

// Internal imports
import { Head } from '../../../components/Header/index';
import { useLogin } from '../../../contexts/LoginContext'

import styles from './index.module.scss'

export default function ConfigHome() {
    const {
        GetLoginKey
    } = useLogin()

    const formik = useFormik({
        initialValues: {
            user: '',
            password: '',
            server: '',
        },

        onSubmit: values => {
            GetLoginKey(values)
        },
    });

    return (
        <Head>
            <div className={styles.confContainer}>
                <form onSubmit={formik.handleSubmit}>
                    <div className={styles.formLabels}>
                        <label>User: </label>
                        <input
                            id="user"
                            name="user"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.user}
                        />

                        <label>Password: </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />

                        <label>Server: </label>
                        <input
                            id="server"
                            name="server"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.server}
                        />
                    </div>
                    <div className={styles.formButton}>
                        <button type="submit">Save options</button>
                    </div>
                </form>
            </div>
        </Head>
    )
}
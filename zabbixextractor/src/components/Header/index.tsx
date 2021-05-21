// External imports
import { ReactNode } from "react";
import Router from 'next/router';

// Internal imports
import { useLogin } from "../../contexts/LoginContext";

// Styles imports
import styles from './index.module.scss';

// Types
type headerProps = {
    children: ReactNode;
}

export function Head({children}: headerProps) {
    const {
        LogOut
    } = useLogin()

    return (
        <div>
            <div className={styles.homeHeader}>
                <div className={styles.dashOptions}>
                    <button
                        type="button"
                        onClick={() => Router.push('/home/dashboard')}
                    >
                        Dashboard
                    </button>

                    <button
                        type="button"
                        onClick={() => Router.push('/home/reports')}
                    >
                        Reports
                    </button>

                    <button
                        type="button"
                        onClick={() => Router.push('/home/templates')}
                    >
                        Templates
                    </button>
                </div>
                <div className={styles.userOptions}>
                    <button
                        type="button"
                        onClick={() => Router.push('https://github.com/NathanQSilva/zabbixExtractor/blob/main/zabbixextractor/README.md')}
                    >
                        <img 
                            src="/info.png" 
                            alt="Informações" 
                            width="30"
                        />
                    </button>

                    <button
                        type="button"
                        onClick={() => Router.push('/home/conf')}
                    >
                        <img 
                            src="/config.png" 
                            alt="Informações" 
                            width="30"
                        />
                    </button>
                    <button
                        type="button"
                        onClick={LogOut}
                    >
                        <img 
                            src="/exit.png" 
                            alt="Informações"
                            width="30"
                        />
                    </button>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
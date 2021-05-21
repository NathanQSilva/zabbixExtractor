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
                    <button>
                        Dashboard
                    </button>
                    <button>
                        Reports
                    </button>
                    <button>
                        Templates
                    </button>
                </div>
                <div className={styles.userOptions}>
                    <button>
                        <img 
                            src="/info.png" 
                            alt="Informações" 
                            width="30"
                        />
                    </button>
                    <button>
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
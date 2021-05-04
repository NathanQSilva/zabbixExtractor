// Styles
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.indexPage}>
      <form className={styles.loginFormContainer}>
        <div className={styles.loginLogo}>
          <img src="/logo_transparent.png" alt="Logo zabbix extractor" width="200"/>
        </div>
        <div className={styles.loginData}>
          <label>Username</label><br/>
          <input type="text"/><br/>
          <label>Password</label><br/>
          <input type="password"/><br/>
          <label>Server</label><br/>
          <input type="text"/><br/>
        </div>
        <div className={styles.loginButton}>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

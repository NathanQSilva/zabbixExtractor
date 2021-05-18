//// External imports
import React from 'react';
import { useFormik } from 'formik';

//// Internal imports
// Import of context login
import { useLogin } from '../contexts/LoginContext';

//// Imports of styles
import styles from './index.module.scss'


export function SignupForm() {
  // consts imported of login context
  const {
    GetLoginKey,
    saved
  } = useLogin()

  // const for form with formik
  const formik = useFormik({
    initialValues: {
      user: '', 
      password: '',
      server: '',
    },

    // on submit the values are passed to the function saving only the key
    onSubmit: values => {
      GetLoginKey(values)
    },
  });

  function goHome() {
    window.location.href = "/home"
  }

  // Html of login page
  return (
    <div className={styles.indexPage}> 
      <form onSubmit={formik.handleSubmit} className={styles.loginFormContainer}>
        <div className={styles.loginLogo}>
          <img src="./logo_transparent.png" alt="Zabbix Extractor Logo" width='250' />
        </div>
        <div className={styles.loginData}>
          <label>User</label>
          <input
            id="user"
            name="user"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.user}
          />
          <label>Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <label>Server</label>
          <input
            id="server"
            name="server"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.server}
          />
        </div>
        <div className={styles.loginButton}>
          <button type="submit" className={styles.saveButton}>Save options</button>
          <button
            className={styles.enterButton} 
            disabled={saved == false}
            onClick={goHome}
          >
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm
//// External imports
import React from 'react';
import { useFormik } from 'formik';
import Router from 'next/router';

//// Internal imports
// Import of context login
import { useLogin } from '../contexts/LoginContext';

//// Imports of styles
import styles from './index.module.scss'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Collapse, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

export function SignupForm() {
  // consts imported of login context
  const {
    GetLoginKey,
    saved,
    isError,
    setIsError
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
            type="button"
            className={styles.enterButton} 
            disabled={saved == false}
            onClick={() => Router.push('/home')}
          >
            Enter
          </button>
        </div>
      </form>
        <Collapse in={isError}> 
          <Alert 
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setIsError(false)
                }}
              >
                <CloseIcon fontSize="inherit"/>
              </IconButton>
            }
            severity="error"
          >
            <AlertTitle>
              Erro
            </AlertTitle>
            Algo deu errado! Verifique os dados do usuário.
          </Alert>
        </Collapse>
        <Collapse in={saved}> 
          <Alert>
            <AlertTitle>
              Sucesso
            </AlertTitle>
            Dados foram salvos com sucesso!!
          </Alert>
        </Collapse>
      </div>
  );
};

export default SignupForm
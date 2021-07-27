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
          <img src="./logo_transparent.png" alt="Zabbix Extractor Logo" />
        </div>
        <div className={styles.loginData}>
          <div className={styles.tittle}>
            <h3>Connect API</h3>
          </div>
          <label>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#373331" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="7" r="4" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <input
              id="user"
              placeholder="User"
              name="user"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.user}
            />
          </label>
          <label>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#373331" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="5" y="11" width="14" height="10" rx="2" />
              <circle cx="12" cy="16" r="1" />
              <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
            </svg>
            <input
              id="password"
              placeholder="Password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </label>
          <label>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#373331" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="3" y="4" width="18" height="8" rx="3" />
              <rect x="3" y="12" width="18" height="8" rx="3" />
              <line x1="7" y1="8" x2="7" y2="8.01" />
              <line x1="7" y1="16" x2="7" y2="16.01" />
            </svg>
            <input
              id="server"
              placeholder="Server zabbix"
              name="server"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.server}
            />
          </label>
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
          <div className={styles.colapse}>
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
        </div>
      </form>
      </div>
  );
};

export default SignupForm
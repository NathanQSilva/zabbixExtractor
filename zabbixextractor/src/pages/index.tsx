import React from 'react';
import { useFormik } from 'formik';
import Link from 'next/link';

import { useLogin } from '../contexts/LoginContext';


const SignupForm = () => {

  const {
    GetLoginKey,
    zabbixKey
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
    <div> 
      <h1>Config API</h1>
      <form onSubmit={formik.handleSubmit}>
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
        <button type="submit">Save options</button>
        <Link href="/home">
          <button>
            Entrar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm
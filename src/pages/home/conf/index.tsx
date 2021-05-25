//// External imports
import { useFormik } from 'formik'

// Internal imports
import { Head } from '../../../components/Header/index';
import { useLogin } from '../../../contexts/LoginContext'

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
    
        // on submit the values are passed to the function saving only the key
        onSubmit: values => {
          GetLoginKey(values)
        },
    });

    return (
        <Head>
            <div> 
                <form onSubmit={formik.handleSubmit}>
                    <div>
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
                    <div>
                        <button type="submit">Save options</button>
                    </div>
                </form>
            </div>
        </Head>  
    )
}
// Styles
import '../styles/globals.scss'

// Internal imports
import { LoginContextProvider } from '../contexts/LoginContext'
import { Head } from '../components/Header/index'

function MyApp({ Component, pageProps }) {
  return (
    <LoginContextProvider>
      <Head />
      <Component { ...pageProps } />
    </LoginContextProvider>
  )
}

export default MyApp
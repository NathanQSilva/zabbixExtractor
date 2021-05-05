// Styles
import '../styles/globals.scss'

// Internar imports
import { LoginContextProvider } from '../contexts/loginContext'

function MyApp({ Component, pageProps }) {
  return (
    <LoginContextProvider>
      <Component {...pageProps} />
    </LoginContextProvider>
  )
}

export default MyApp

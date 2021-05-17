// Styles
import '../styles/globals.scss'

import { LoginContextProvider } from '../contexts/LoginContext'

function MyApp({ Component, pageProps }) {
  return (
    <LoginContextProvider>
      <Component { ...pageProps } />
    </LoginContextProvider>
  )
}

export default MyApp
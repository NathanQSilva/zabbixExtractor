// Styles
import '../styles/globals.scss'

// Internal imports
import { LoginContextProvider } from '../contexts/LoginContext';
import { SignupForm } from '../pages/index';

function MyApp({ Component, pageProps }) {
  return (
    <LoginContextProvider >
      <Component >
        <SignupForm />
      </Component>
    </LoginContextProvider> 
  )
}

export default MyApp
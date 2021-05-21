// Styles
import '../styles/globals.scss'

// Internal imports
import { LoginContextProvider } from '../contexts/LoginContext';
import { RequestsContextProvider } from '../contexts/RequestsContext';
import { SignupForm } from '../pages/index';

function MyApp({ Component, pageProps }) {
  return (
    <LoginContextProvider >
      <RequestsContextProvider >
        <Component >
          <SignupForm />
        </Component>
      </RequestsContextProvider>
    </LoginContextProvider> 
  )
}

export default MyApp
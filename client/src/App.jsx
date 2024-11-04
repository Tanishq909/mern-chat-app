import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from "./components/Messenger"
import AccountProvider from './context/AccountProvider';



function App() {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
 
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  )
}

export default App;

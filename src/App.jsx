import {useState} from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {jwtDecode} from 'jwt-decode'; 
import SignInPage from "./pages/auth/SignInPage"
import SignUpPage from "./pages/auth/SignUpPage"
import * as userService from 'services/user'; 
import SessionContext from 'contexts/sessionContext';

// import apiFetch from "./services/apiFetch"

// const response = await apiFetch('GET', '/api-key/info'); 
// console.log('response status: ', response.status)

const App = () => {

  const [sessionToken, setSessionToken] = useState(() => userService.getSessionTokenStorage())
  // console.log(jwtDecode(sessionToken))

  return (
    <SessionContext.Provider value={{
      username: sessionToken ? jwtDecode(sessionToken).username : null, 
      signIn: (token) => {
        setSessionToken(token);
        userService.setSessionTokenStorage(token); 
      }, 
      signOut: () => {
        setSessionToken(null); 
        userService.removeSessionTokenStorage(); 
      }
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignInPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  )
}

export default App

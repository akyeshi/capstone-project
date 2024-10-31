import {useState, useContext} from 'react'; 
import {Link, useLocation} from 'react-router-dom'; 
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from 'services/user'; 
import SessionContext from 'contexts/sessionContext';

const SignInPage = () => {

  const [error, setError] = useState(''); 
  const sessionContext = useContext(SessionContext); // has signIn, signOut, username in it 
  const location = useLocation(); 
  // console.log(location.state)

  return (
      <FormContainer>
        <div className="text-red-600 font-lato">{error}</div>
        {
          location.state?.accountCreated && <div className="p-4 border bg-green-200 
          rounded-lg text-emerald-700 border-emerald-500 mb-8 mt-2">
            Account created successfully. Please sign in. 
          </div>
        }
        <AuthForm 
          fields={[
            {
              label: 'username', 
              type: 'text'
            }, 
            {
              label: 'password', 
              type: 'password'
            }
          ]}
          submitButtonLabel="sign in"
          onSubmit={async(values) => {
            // console.log(values)
            const response = await userService.createSession({
              username: values.username, 
              password: values.password
            })

            // login form field values creates a unique session token accessable at data.capstone_session_token
            const data = await response.json(); 
            if (response.status === 201) {
              sessionContext.signIn(data.capstone_session_token); // session token in localstorage now 
              console.log(data); 
              console.log(data.capstone_session_token); 
              console.log('user successfully logged in!')
              setError('')
            } else {
              setError(data.error)
            }
          }}

        />
        <Link to='/sign-up' className="text-sm text-green-600 underline">create an account</Link>
      </FormContainer>
  )
}


export default SignInPage; 
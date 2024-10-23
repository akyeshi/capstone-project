import {Link} from 'react-router-dom'; 
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";

const SignUpPage = () => {
  
  // pass to the form 'fields' prop with value as an array containing all form fields as objects
  // outside curly is for interpolation 
  return (
    <FormContainer>
      <AuthForm 
        fields={[
          {
            label: 'username', 
            type: 'text'
          }, 
          {
            label: 'password', 
            type: 'password'
          }, 
          {
            label: 'confirm password', 
            type: 'password'
          }, 
        ]}
        submitButtonLabel="create account"
        />
      <Link to='/' className='text-sm text-green-600 underline'>sign in</Link>
    </FormContainer>
  )
}


export default SignUpPage; 
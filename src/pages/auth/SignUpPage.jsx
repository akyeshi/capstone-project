import {useState} from 'react'; 
import {Link, useNavigate} from 'react-router-dom'; 
import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import * as userService from 'services/user'; 

const SignUpPage = () => {

  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  
  // pass to the form 'fields' prop with value as an array containing all form fields as objects
  // outside curly is for interpolation 
  return (
    <FormContainer>
      <div className="text-red-700 font-lato">{error}</div>
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
        onSubmit={async (values) => {
          // console.log(values)
          if (values.username.length < 4) {
            console.log('username too short')
            setError('username too short')
            return; 
          } 
          if (values.password.length < 4) {
            console.log('password too short')
            setError('password too short')
            return; 
          } 
          if (values.password !== values['confirm password']) {
            console.log('password do not match')
            setError('password do not match')
            return; 
          } 

          const response = await userService.createUser({
            username: values.username, 
            password: values.password
          }); 
          
          if (response.status === 201) {
            setError(''); 
            console.log('user created!'); 
            navigate('/', {
              state: {
                accountCreated: true 
              }
            })
          } else {
            const data = await response.json(); 
            console.log(data)
            setError(data.error)
          }
        }}
        />
      <Link to='/' className='text-sm text-green-600 underline'>sign in</Link>
    </FormContainer>
  )
}


export default SignUpPage; 
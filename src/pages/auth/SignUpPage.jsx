import AuthForm from "./AuthForm";

const SignUpPage = () => {
  
  // pass to the form 'fields' prop with value as an array containing all form fields as objects
  // outside curly is for interpolation 
  return (
    <div className="flex justify-center items-center">
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
    </div>
  )
}


export default SignUpPage; 
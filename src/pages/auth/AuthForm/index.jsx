
import {useState} from 'react'; 
import Field from './field';

const AuthForm = ({fields, submitButtonLabel}) => {

  // initial value of 'values' will be the output of the callback function 
  const [values, setValues] = useState(() => {
    const initialState = {}; 
    for (let field of fields) {
      initialState[field.label] = ""; 
    }
    return initialState; 
  })
  console.log(values)


  return (
    <form className="bg-white border border-slate-200 rounded-md m-4 p-4 font-lato">
      {fields.map(field => (
        <Field 
          key={field.label}
          label={field.label} 
          type={field.type} 
          value={values[field.label]}
          onChange={(e) => setValues({...values, [field.label]: e.target.value})}
        />
      ))} 
      <button className="text-white bg-emerald-700 w-full py-2 rounded-lg bg-emerald-700 mt-4">
        {submitButtonLabel}
      </button>
    </form>
  )
}


export default AuthForm; 

import {useState} from 'react'; 
import Field from './field';

const AuthForm = ({fields, submitButtonLabel, onSubmit}) => {

  // initial value of 'values' will be the output of the callback function 
  const [values, setValues] = useState(() => {
    const initialState = {}; 
    for (let field of fields) {
      initialState[field.label] = ""; 
    }
    return initialState; 
  })
  // console.log(values)

  const [isLoading, setIsloading] = useState(false); 


  return (
    <form 
      className="bg-white border border-slate-200 rounded-md m-4 p-4 font-lato"
      onSubmit={async (e) => {
        e.preventDefault(); 
        setIsloading(true)
        await onSubmit(values)
        setIsloading(false)
      }}
    >
      {fields.map(field => (
        <Field 
          key={field.label}
          label={field.label} 
          type={field.type} 
          value={values[field.label]}
          onChange={(e) => setValues({...values, [field.label]: e.target.value})}
        />
      ))} 
      <button className="relative text-white bg-emerald-700 w-full py-2 rounded-lg bg-emerald-700 mt-4">
        {submitButtonLabel}
        {isLoading && (
          <div className="absolute flex top-0 right-5 items-center h-full ">
            <i className="fa-solid fa-spinner animate-spin text-xl"></i>
          </div>
        )}
      </button>
    </form>
  )
}


export default AuthForm; 
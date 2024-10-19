


const Field = ({label, type, value, onChange}) => {
  return (
    <div className="flex flex-col my-4">
      <label htmlFor={label} className="text-slate-500">{label}</label>
      <input 
        id={label} type={type} 
        className="border rounded-lg bg-slate-50 border-slate-200 px-2 py-1 w-64 focus:outline-emerald-600" 
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Field; 
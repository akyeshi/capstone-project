import {useContext, useState} from 'react'; 
import SessionContext from 'contexts/SessionContext';


const NavBar = () => {

  const [logoutMenuIsOpen, setLogoutMenuIsOpen] = useState(false); 
  const {username, signOut} = useContext(SessionContext); 
  console.log('testing...: ', username)

  return (
    <nav 
      className="flex bg-emerald-800 justify-center font-lato"
      onMouseLeave={() => setLogoutMenuIsOpen(false)}
    >
      <div className="flex items-center justify-between w-full max-w-5xl px-8 py-2">
        <div className="flex flex-col items-center text-2xl text-white font-playfair">
          <img 
            className="w-10"
            src="https://static-task-assets.react-formula.com/capstone_logo_light.png" 
          />
          Rica's Plants
        </div>
        <div className="flex flex-1 justify-end">
          <div className="relative min-w-32">
            <button 
              className="flex items-center text-emerald-200"
              onClick={() => setLogoutMenuIsOpen(true)}
            >
              <i className="mr-2 text-xl fa-solid fa-user" />
              {username}
            </button>
            {
              logoutMenuIsOpen && 
              <div className="absolute bottom-[-46px] left-0 mt-20 bg-white rounded-md shadow-md">
                <button 
                  className="text-slate-500 hover:text-emerald-700 px-4 py-2"
                  onClick={signOut}
                  // onClick={() => signOut()}
                  >
                  <i className="mr-2 fa-solid fa-arrow-right-from-bracket"></i>
                  sign out
                </button>
              </div>
            }
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar; 
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext"

const RedirectToSignInIfSignedOut = (props) => {
  // if signed in, redirect to PlantListPage, 
  // otherwise, render the children 

  const {username} = useContext(SessionContext); 
  const navigate = useNavigate(); 
  
  useEffect(() => {
    if (username === null) {
      navigate('/')
    }
  }, [username])

  return props.children; 
}


export default RedirectToSignInIfSignedOut; 
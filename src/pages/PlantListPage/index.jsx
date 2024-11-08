import NavBar from "shared-components/NavBar";
import RedirectToSignInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut.jsx";

const PlantListPage = () => {
  return (
    <RedirectToSignInIfSignedOut>
      <NavBar />
    </RedirectToSignInIfSignedOut>

  )
}

export default PlantListPage; 
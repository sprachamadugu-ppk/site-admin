import SiteForm from "./components/SiteForm";
import { useState } from "react";
import AuthToken from "./components/TokenForm";
import { authToken } from "./context/TokenContext";
const App = () => {
  const [token, setToken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(true);
  const handleSubmit = (token: string) => {
    setToken(token);
    setAuth(false);
  };
  // const handleSiteFormSubmit = (formData: any) => {
  //   // Handle the submission of the site form data
  //   console.log("Site form submitted with data:", formData);
  // };
  return (
    <>
      {auth && <AuthToken onSubmit={handleSubmit} />}
      {!auth && (
        <authToken.Provider value={{ token }}>
        <SiteForm />
        </authToken.Provider>
      )}
    </>
  );
};

export default App;
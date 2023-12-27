import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
  Outlet,
} from "react-router-dom";
import AuthToken from "./components/TokenForm";
import { authToken } from "./context/TokenContext";
import SiteForm from "./components/SiteForm";
import SiteTable from "./components/Table";

const Navigation = () => {
  return (
    <nav>
      <Link to="/site-form">Site Add Form</Link>&nbsp;&nbsp;
      <Link to="/site-table">Site Admin Table</Link>
    </nav>
  );
};

const Home = () => {
  return (
    <div style={{ marginLeft: 200 }}>
      <h1>Welcome to the Home Page</h1>
      <Navigation />
      <Outlet />
    </div>
  );
};

const App = () => {
  const [token, setToken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(true);

  const handleSubmit = (userToken: string) => {
    setToken(userToken);
    setAuth(false);
  };

  return (
    <Router>
      <authToken.Provider value={{ token }}>
        <Routes>
          <Route
            path="/"
            element={
              auth ? (
                <AuthToken onSubmit={handleSubmit} />
              ) : (
                <Navigate to="/home" />
              )
            }
          />
          <Route
            path="/home"
            element={
              token ? (
                <Home />
              ) : (
                <>
                  <Navigate to="/" />
                </>
              )
            }
          />
          <Route path="/site-form" element={<SiteForm />} />
          <Route path="/site-table" element={<SiteTable />} />
        </Routes>
      </authToken.Provider>
    </Router>
  );
};

export default App;

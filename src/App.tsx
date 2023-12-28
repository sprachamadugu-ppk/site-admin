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
import DepartmentForm from "./components/DepartmentForm";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";

const Navigation = () => {
  return (
    <nav>
      <Link to="/site-form">Site Add Form</Link>&nbsp;&nbsp;
      <Link to="/site-table">Site Admin Table</Link>&nbsp;&nbsp;
      <Link to="/add-department">Department Add Form</Link>&nbsp;&nbsp;
      <Link to="/dashboard">Dashboard</Link>
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/add-department" element={<DepartmentForm departmentId="658bf2d1303eb04ba3b84370"/>} />
        </Routes>
      </authToken.Provider>
    </Router>
  );
};

export default App;

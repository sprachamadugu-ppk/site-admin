import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AuthToken from "./components/TokenForm";
import { authToken } from "./context/TokenContext";
import SiteForm from "./components/SiteForm";
import SiteTable from "./components/Table";
import DepartmentForm from "./components/DepartmentForm";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import "./App.css";

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
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              token ? (
                <Dashboard />
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
          <Route
            path="/edit-department"
            element={<DepartmentForm departmentId="658e623dfa8ef46d16cd127e" />}
          />
        </Routes>
      </authToken.Provider>
    </Router>
  );
};

export default App;

import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin/Admin";
import Dashboard from "./components/Admin/Dashboard";
import User from "./pages/Admin/User";
import Profile from "./pages/Admin/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Redirect "/admin" to "/admin/dashboard" */}
        <Route
          path="/admin"
          element={<Navigate to="/admin/dashboard" replace />}
        />

        <Route path="/admin/*" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user/*" element={<User />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          {/* <Route path="message" element={<DataTable />} /> */}
        </Route>

        <Route path="/signup" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

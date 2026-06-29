import { Routes, Route } from "react-router-dom"
import './App.css'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Layout from "./pages/Layout"
import Home from "./pages/Home/Home"
import { LayersCounter } from "@fortawesome/react-fontawesome"
import CandidateProfilePage from "./pages/Candidate/CandidateProfilePage"
import CompanyProfilePage from "./pages/Company/CompanyProfilePage"
import ProtectedRoute from "./routes/ProtectedRoutes"
import RoleRoute from "./routes/RoleRoute"
function App() {

  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>

            <Route element={<RoleRoute role="candidate" />}>
              <Route
                path="candidate/profile"
                element={<CandidateProfilePage />}
              />
            </Route>

            <Route element={<RoleRoute role="company" />}>
              <Route
                path="company/profile"
                element={<CompanyProfilePage />}
              />
            </Route>

          </Route>
        </Route>
      </Routes>


    </>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import './App.css'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Layout from "./pages/Layout"
import Home from "./pages/Home/Home"
import { LayersCounter } from "@fortawesome/react-fontawesome"
import CandidateProfilePage from "./pages/Candidate/CandidateProfilePage"
function App() {

  return (
    <>

 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<Layout />}>

            <Route path="/" element={<div>dashboard</div>} />
            <Route path="/profile" element={<CandidateProfilePage/>} />
          </Route>
        </Routes>
     

    </>
  )
}

export default App

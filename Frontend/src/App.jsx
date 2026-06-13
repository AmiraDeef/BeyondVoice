import {Routes,Route} from "react-router-dom"
import './App.css'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Navbar from './components/Layouts/Navbar/Navbar'
import Footer from './components/Layouts/Footer/Footer'
import Home from "./pages/Home/Home"
function App() {

  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App

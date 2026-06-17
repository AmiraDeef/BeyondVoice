import { Outlet } from "react-router-dom";
import Navbar from '../components/Layouts/Navbar/Navbar'
import Footer from '../components/Layouts/Footer/Footer'
import Sidebar from '../components/Layouts/Sidebar/Sidebar'
function DashboardLayout() {
    return (
        <>
          <div className="flex h-screen w-full overflow-hidden bg-slate-50">
      
      <Sidebar />
    
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        <Navbar />
        
        <main className="flex-1 overflow-y-auto p-8 bg-white">
          <Outlet /> 
        </main>
        
        <Footer />

      </div>
     
    </div></>
    );
}

export default DashboardLayout;
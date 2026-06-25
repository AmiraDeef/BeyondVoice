import { Outlet } from "react-router-dom";
import Navbar from "../components/Layouts/Navbar/Navbar";
import Footer from "../components/Layouts/Footer/Footer";
import Sidebar from "../components/Layouts/Sidebar/Sidebar";
function DashboardLayout() {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-[var(--bg-color)]">
        <Sidebar />

        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <Navbar />

          <main className="flex-1 flex-grow overflow-y-auto  bg-white flex flex-col items-center">
            <div className="w-full max-w-6xl mx-auto">
              <Outlet />
            </div>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;

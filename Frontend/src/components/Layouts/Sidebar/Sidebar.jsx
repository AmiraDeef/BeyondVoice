import { NavLink } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import profileImg from "../../../assets/logoBeyondVoice.png"  //static just for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocketchat } from "@fortawesome/free-brands-svg-icons";
import {
  faHouse,
  faMagnifyingGlass,
  faBriefcase,faRightFromBracket,
  faFileInvoice,
  faUsers,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ isOpen, setIsOpen }) {
  const {user,setToken}=useAuth()
const basePath = `/${user.role}`;

const links =
  user.role === "candidate"
    ? [
        {
          icon: faHouse,
          title: "Dashboard",
          path: `${basePath}/dashboard`,
        },
        {
          icon: faMagnifyingGlass,
          title: "Browse Jobs",
          path: `${basePath}/jobs`,
        },
        {
          icon: faFileInvoice,
          title: "Applications",
          path: `${basePath}/applications`,
        },
        {
          icon: faGear,
          title: "Profile",
          path: `${basePath}/profile`,
        },
      ]
    : [
        {
          icon: faHouse,
          title: "Dashboard",
          path: `${basePath}/dashboard`,
        },
        {
          icon: faBriefcase,
          title: "Jobs",
          path: `${basePath}/jobs`,
        },
        {
          icon: faUsers,
          title: "Applicants",
          path: `${basePath}/applicants`,
        },
        {
          icon: faGear,
          title: "Profile",
          path: `${basePath}/profile`,
        },
      ];

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);

    window.location.href = "/login";
  }




  return (<>
    <aside className={` w-64 h-full bg-[#1B3A5C] text-white flex flex-col transition-transform duration-300 ease-in-out z-50
      fixed inset-y-0 left-0 -translate-x-full md:relative md:translate-x-0
      ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    `}>
      <button
        onClick={() => setIsOpen(false)}
        className="md:hidden absolute top-4 right-4 text-white"
      >
        ✕
      </button>
      <div className="flex-1 overflow-y-auto">

        <div className="h-16 px-6 font-bold text-xl tracking-wide border-b border-slate-700/50 flex items-center opacity-95">
          BeyondVoice
        </div>

        <nav className="px-3 space-y-1">
          {links.map((item) => (
  <NavLink
    key={item.title}
    to={item.path}
    className={({ isActive }) =>
      `flex items-center justify-between px-4 py-3 rounded-lg ${
        isActive
          ? "bg-teal-600/30 text-teal-400 border-l-4 border-teal-500"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`
    }
  >
    <div className="flex items-center gap-3">
      <FontAwesomeIcon icon={item.icon} />
      <span>{item.title}</span>
    </div>
  </NavLink>
))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-[var(--grey-color)] bg-slate-900/20">
        <div className="flex items-center gap-3 mb-4">
          
          <img
            src={profileImg}
            alt=""
            className="w-10 h-10 rounded-full object-cover "
          />
          <div>
            <h4 className="text-sm font-semibold text-white">{user?.fullName}</h4>
            <p className="text-xs text-slate-400">{user?.role}</p>
          </div>
        </div>

        <button on onClick={handleLogout} className="flex items-center gap-3 text-sm text-slate-400 hover:text-red-400 transition-colors w-full text-left px-2 py-1">
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>

  </>)
}


export default Sidebar
import{Link} from 'react-router-dom'

function Navbar(){
    return(
        <>
        <div className=" bg-white border-b border-gray-100 sticky top-0 z-50 ">
        <div className="container mx-auto flex items-center justify-around h-16  md:justify-between ">
          <div>
            <Link to="/" className="text-xl font-bold text-[var(--main-color)] ">
              Beyond Voice
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/register" className="text-[var(--main-color)] border border-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white py-2 px-5 rounded-lg text-base font-medium">Register</Link>
            <Link to="/login" className=" border border-[var(--secondary-color)] bg-[var(--secondary-color)] text-white py-2 px-5 rounded-lg text-base font-medium">Login</Link>
          </div>

        </div>
        </div>

        
        
        
        </>
    )
}
export default Navbar
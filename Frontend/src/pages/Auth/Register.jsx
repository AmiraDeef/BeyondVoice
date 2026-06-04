import LeftSide from "../../components/Auth/LeftSide"
import RightSide from "../../components/Auth/RightSide"
function Register(){
    return(<>
    
    
    <div className="md:grid grid-cols-2 h-screen">
        <LeftSide type="register" />
        <RightSide type="register" />
    </div>
    
    </>)
}

export default Register

import LeftSide from '../../components/Auth/LeftSide'
import RightSide from "../../components/Auth/RightSide";

function Login() {
  return (
    <div className="md:grid grid-cols-2 h-screen ">
      <LeftSide  type="login"/>
      <RightSide type="login" /> 
    </div>
  );
}

export default Login;
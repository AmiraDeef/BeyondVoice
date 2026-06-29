import { useAuth } from "../hooks/useAuth";
import { Navigate ,Outlet} from "react-router-dom";


function RoleRoute({role}) {
    const { user } = useAuth();
    if (user?.role !== role) return <Navigate to="/" replace/>
    return (

        <Outlet/>

    )
}
export default RoleRoute 
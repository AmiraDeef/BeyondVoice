// import LeftSide from "../../components/Auth/LeftSide"
// import RightSide from "../../components/Auth/RightSide"
// function Register(){
//     return(<>


//     <div className="md:grid grid-cols-2 h-screen">
//         <LeftSide type="register" />
//         <RightSide type="register" />
//     </div>

//     </>)
// }

// export default Register
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/axios";
import AuthForm from "../../components/Auth/AuthForm";
import LeftSide from '../../components/Auth/LeftSide'

function RegisterPage() {
     const [error, setError] = useState("");
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            role: "candidate",
        },
    });

    const onSubmit = async (data) => {
        setError("")
        try {
            console.log(data);

            const res = await api.post("/register", data);

            console.log(res.data);

            navigate("/login");
        } catch (err) {
            console.log(err.response?.data);
             const message = err.response?.data?.message;

      if (Array.isArray(message)) {
        setError(message[0]);
      } else {
        setError(message);
      }
        }
    };

    return (
        <> <div className="md:grid grid-cols-2 h-screen ">
            <LeftSide  type="register"/>
            <AuthForm
                type="register"
                form={form}
                onSubmit={onSubmit}
                error={error} />
        </div>


        </>

    );
}

export default RegisterPage;
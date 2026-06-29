

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../api/axios";
import { useAuth } from "../../hooks/useAuth";
import AuthForm from "../../components/Auth/AuthForm";
import LeftSide from '../../components/Auth/LeftSide'

function Login() {
  const [error, setError] = useState("");
const { setToken, setUser } = useAuth();


  const navigate = useNavigate();

  const form = useForm({

    defaultValues: {

      email: "",

      password: ""

    }

  });

  const onSubmit = async (data) => {
    setError("");

    try {
      

      const res = await api.post("/login", data);


      localStorage.setItem("token", res.data.token);

      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      setToken(res.data.token);
      console.log(res.data.user);
      

      setUser(res.data.user);

      navigate(`/${res.data.user.role}/profile`);

    }

    catch (err) {

      console.log(err.response?.data);
      const message = err.response?.data?.message;

      if (Array.isArray(message)) {
        setError(message[0]);
      } else {
        setError(message);
      }
  

  }

}

return (
  <> <div className="md:grid grid-cols-2 h-screen ">
    <LeftSide type="login" />
    <AuthForm
      type="login"
      form={form}
      onSubmit={onSubmit}
       error={error} />
  </div>


  </>


)

}

export default Login;
import LoginForm from "../Components/LoginForm/LoginForm.jsx";
import Header from "../Components/LoginForm/LoginHeader.jsx"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext.jsx";

const LoginView = () => {
  const navigation = useNavigate()
  const { user } = useUserContext()

  useEffect(() => {
    if(user.username !== "") {
      navigation("./translation")
    }
  })

  return (
    // IMPORT NAVBAR COMPONENT
    <>
      <Header />
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginView;

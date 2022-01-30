import LoginForm from "../Components/LoginForm/LoginForm.jsx";
import Header from "../Components/LoginForm/LoginHeader.jsx"

const LoginView = () => {
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

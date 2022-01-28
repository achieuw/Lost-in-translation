import Logo from "../../public/LostInTranslation_Resources/Logo.png";
import Splash from "../../public/LostInTranslation_Resources/Splash.svg";
import LoginForm from "../Components/LoginForm/LoginForm.jsx";

const LoginView = () => {
  const header = (() => {
    return (
      <div className="flex justify-center items-center primary-text-col w-full h-[40vh] bg-[#FFC75F]">
        <div className="flex flex-row justify-center h-48 items-center">
          <div className="mr-6">
            <img className="w-36 absolute z-10 -m-6" src={Splash}></img>
            <img className="w-24 relative z-20" src={Logo}></img>
          </div>

          <div className="flex flex-col text-left ml-6 mb-6">
            <h1 className="primary-font drop-shadow text-size-xl">
              Lost in Translation
            </h1>
            <h3 className="body-font text-2xl drop-shadow">Get started</h3>
          </div>
        </div>
      </div>
    );
  })();
  return (
    // IMPORT NAVBAR COMPONENT
    <>
      {header}

      <div className="flex justify-center">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginView;

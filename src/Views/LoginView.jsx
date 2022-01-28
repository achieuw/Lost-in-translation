import Logo from "/LostInTranslation_Resources/Logo.png";
import Splash from "/LostInTranslation_Resources/Splash.svg";
import InputBox from '../../src/Components/InputBox.jsx'

const LoginView = () => {
  return (
    // IMPORT NAVBAR COMPONENT
    <>
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
            <h3 className="body-font text-2xl">Get started</h3>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <form className="-mt-20 pb-12 pt-7 rounded-xl form-shadow w-4/6 relative z-30 linear-white-purple">
          <InputBox placeholder="What's your name?" />
        </form>
      </div>
    </>
  );
};

export default LoginView;

import Logo from "/LostInTranslation_Resources/Logo.png";
import Splash from "/LostInTranslation_Resources/Splash.svg";
const LoginView = () => {
  return (
    // IMPORT NAVBAR COMPONENT

    <div className="primary-text-col w-full h-[50vh] bg-[#FFC75F]">
      <div>
          <div>
          <img className="w-0" src={Splash}></img>
        <img className="w-24" src={Logo}></img>
          </div>
        
        <div>
        <h1 className="primary-font">Lost in Translation</h1>
      <h3 className="body-font">Get started</h3>
        </div>
        
      </div>

      
    </div>
  );
};

export default LoginView;

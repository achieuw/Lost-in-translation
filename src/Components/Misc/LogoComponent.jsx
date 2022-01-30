import Logo from "/LostInTranslation_Resources/Logo.png";
import Splash from "/LostInTranslation_Resources/Splash.svg";

const LogoComponent = (props) => {
  const size = props.size;
  return (
    <div>
      <img
        className="absolute z-10 mt-4"
        width={size}
        src={Splash}
      ></img>
      <img
        className="relative z-20"
        width={size}
        src={Logo}
      ></img>
    </div>
  );
};

export default LogoComponent;

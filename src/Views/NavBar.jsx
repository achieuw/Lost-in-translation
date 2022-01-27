/**
 * Dependencies
 * @ignore
 */
import Splash from '../../public/LostInTranslation_Resources/Splash.svg'
import Logo from '../../public/LostInTranslation_Resources/Logo.png'


/**
 * 
 * @ignore
 */
const NavBar = () => {
  return (
    <div className='flex bg-yellow-300'>
        <img src={Splash} className='w-12'/>
        <img src={Logo} className='absolute w-12'/>
    </div>
  );
};

export default NavBar
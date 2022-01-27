/**
 * Dependencies
 * @ignore
 */
import Splash from '/LostInTranslation_Resources/Splash.svg'
import Logo from '/LostInTranslation_Resources/Logo.png'
import NavbarHead from '../Components/NavBar/NavbarHead'


/**
 * Component
 * @ignore
 */
const NavBar = () => {
  return (
      <>
        <div className='flex yellow border-color gap-4 py-2'>
            <div className='flex relative ml-20'>
                <img src={Splash} className='w-16'/>
                <img src={Logo} className='absolute left-2 top-2 w-12'/>
            </div>
            <h2 className='primary-font primary-text-col p-2'>Lost in Translation</h2>
            <NavbarHead name="Edwin"/>
        </div>
      </>
  );
};

/**
 * Exports
 * @ignore
 */
export default NavBar
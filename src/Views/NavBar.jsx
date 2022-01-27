/**
 * Dependencies
 * @ignore
 */
import Splash from '/LostInTranslation_Resources/Splash.svg'
import Logo from '/LostInTranslation_Resources/Logo.png'
import ProfileHead from '../Components/NavBar/ProfileHead'


/**
 * Component
 * @ignore
 */
const NavBar = () => {
  return (
      <>
        <div className='flex yellow border-color gap-4 py-2'>
            <div className='flex relative w-12 ml-6'>
                <img src={Splash} className=''/>
                <img src={Logo} className='absolute w-12'/>
            </div>
            <h2 className='primary-font primary-text-col p-2'>Lost in Translation</h2>
            <ProfileHead name="Edwin"/>
        </div>
      </>
  );
};

/**
 * Exports
 * @ignore
 */
export default NavBar
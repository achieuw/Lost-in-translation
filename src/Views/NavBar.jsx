/**
 * Dependencies
 * @ignore
 */
import Splash from '/LostInTranslation_Resources/Splash.svg'
import Logo from '/LostInTranslation_Resources/Logo.png'
import NavbarHead from '../Components/NavBar/NavbarHead'
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
/**
 * Component
 * @ignore
 */
const NavBar = () => {

  // get user obj from context
  const {user} = useUserContext();
  const navigate = useNavigate();

  const handleToProfileClick = () => {
    navigate(`/profile/${user.username}`);
  }

  return (
      <>
        <div className='flex yellow border-color gap-4 py-2 justify-between px-20'>
            <div className='flex relative gap-3'>
                <img src={Splash} className='w-16'/>
                <img src={Logo} className='absolute left-2 top-2 w-12'/>
                <h2 className='primary-font primary-text-col p-2'>Lost in Translation</h2>
            </div>
            <NavbarHead toProfileClick={ handleToProfileClick } name={user.username}/>
        </div>
      </>
  );
};

/**
 * Exports
 * @ignore
 */
export default NavBar
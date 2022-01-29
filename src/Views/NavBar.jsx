/**
 * Dependencies
 * @ignore
 */
import Splash from '/LostInTranslation_Resources/Splash.svg'
import Logo from '/LostInTranslation_Resources/Logo.png'
import NavbarHead from '../Components/NavBar/NavbarHead'
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../contexts/UserContext';
import { loginUser, UserReducer } from '../reducers/UserReducer';

/**
 * Component
 * @ignore
 */
const NavBar = () => {

  // const [user, setUser] = useUserContext();

  const {user, dispatch} = useUserContext();

  const handleSetUsername = async () => {
    dispatch(await loginUser("edwine"))
  }

  return (
      <>
        <div className='flex yellow border-color gap-4 py-2 justify-between px-20'>
            <div className='flex relative gap-3'>
                <img src={Splash} className='w-16'/>
                <img src={Logo} className='absolute left-2 top-2 w-12'/>
                <h2 className='primary-font primary-text-col p-2'>Lost in Translation</h2>
            </div>
            <button type='button' className='bg-slate-500' onClick={handleSetUsername}>Set Username</button>
            <p>{user.username}</p>
            <NavLink to="/profile">
              <NavbarHead name={user.username}/>
            </NavLink>
        </div>
      </>
  );
};

/**
 * Exports
 * @ignore
 */
export default NavBar
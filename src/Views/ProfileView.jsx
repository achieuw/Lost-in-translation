import ProfileInfo from '../Components/Profile/ProfileInfo';
import ProfileLogout from '../Components/Profile/ProfileLogout';
import ProfileTranslationsList from '../Components/Profile/ProfileTranslationsList'
import { deleteTranslations, logoutUser, useUserContext } from '../contexts/UserContext'
import { useEffect } from 'react';

const ProfileView = () => {

  const { user, dispatch } = useUserContext()

  // Navigate to login view if user is not set
  useEffect(() => {
    if(user.username === "") {
      navigate("/")
    }
  }, [user])

  const handleLogoutUser = () => {
    dispatch(logoutUser())
  }

  const handleDeleteTranslations = async () => {
    dispatch( await deleteTranslations(user.id, [...user.translations]))
  }

  const handleToTranslateClick = () => {
    navigate('/translation')
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center primary-text-col w-full h-[25vh] yellow px-32">
        <ProfileInfo username={ user.username } />
        <ProfileLogout onLogoutClick={ handleLogoutUser } />
      </div>
      <ProfileTranslationsList translations={user.translations} handleDeleteTranslations={ handleDeleteTranslations }/>
      <button onClick={ handleToTranslateClick } className='fixed left-5 bottom-5 purple px-3 py-2 rounded-full body-font hover:bg-[#5f438b] text-2xl text-white'>To Translate</button>
    </div>
  );
};
 export default ProfileView
import ProfileInfo from '../Components/Profile/ProfileInfo';
import ProfileLogout from '../Components/Profile/ProfileLogout';
import ProfileTranslationsList from '../Components/Profile/ProfileTranslationsList'
import { deleteTranslations, logoutUser, useUserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProfileView = () => {

  const { user, dispatch } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(user.username === "") {
      navigate("/")
    }
  }, [user])

  const handleLogoutUser = () => {
    dispatch(logoutUser())
  }

  const handleDeleteTranslations = () => {
    dispatch(deleteTranslations([...user.translations]))
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center primary-text-col w-full h-[25vh] yellow px-32">
        <ProfileInfo username={ user.username } />
        <ProfileLogout onLogoutClick={ handleLogoutUser } />
      </div>
      <ProfileTranslationsList translations={user.translations} handleDeleteTranslations={ handleDeleteTranslations }/>
    </div>
  );
};
 export default ProfileView
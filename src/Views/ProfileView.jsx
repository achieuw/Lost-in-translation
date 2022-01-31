import ProfileInfo from '../Components/Profile/ProfileInfo';
import ProfileLogout from '../Components/Profile/ProfileLogout';
import ProfileTranslationsList from '../Components/Profile/ProfileTranslationsList'
import { deleteTranslations, logoutUser, useUserContext } from '../contexts/UserContext'

const ProfileView = () => {

  const { user, dispatch } = useUserContext()

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
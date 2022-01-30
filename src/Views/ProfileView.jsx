import ProfileInfo from '../Components/Profile/ProfileInfo';
import ProfileLogout from '../Components/Profile/ProfileLogout';
import ProfileTranslationsList from '../Components/Profile/ProfileTranslationsList'
import { useUserContext } from '../contexts/UserContext'

const ProfileView = () => {

  const { user } = useUserContext()

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center primary-text-col w-full h-[40vh] yellow px-32">
        <ProfileInfo />
        <ProfileLogout />
      </div>
      <ProfileTranslationsList translations={user.translations}/>
    </div>
  );
};
 export default ProfileView
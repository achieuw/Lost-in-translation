import ProfileInfo from '../Components/Profile/ProfileInfo';
import ProfileLogout from '../Components/Profile/ProfileLogout';

const ProfileView = () => {


  return (
    <>
      <div className="flex justify-between items-center primary-text-col w-full h-[40vh] yellow px-32">
        <ProfileInfo />
        <ProfileLogout />
      </div>
    </>
  );
};
 export default ProfileView
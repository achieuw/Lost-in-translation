
const ProfileLogout = ({ onLogoutClick }) => {

    const handleOnLogoutClick = () => {
        onLogoutClick()
    }

    return <button onClick={ handleOnLogoutClick } className="bg-red-600 rounded-full h-fit px-3 py-2 body-font hover:bg-red-700">Log Out</button>;
};

export default ProfileLogout

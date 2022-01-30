import { useUserContext } from "../../contexts/UserContext";

const ProfileLogout = () => {

    const { dispatch } = useUserContext()

    const handleOnLogoutClick = () => {
        dispatch( /**/)
    }

    return <button className="bg-red-600 rounded-full h-fit px-3 py-2">Log Out</button>;
};

export default ProfileLogout

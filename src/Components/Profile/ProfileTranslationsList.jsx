import { useUserContext } from "../../contexts/UserContext";

const ProfileTranslationsList = () => {

    const { user } = useUserContext();
    const translations = [...user.translations, "hej", "test"]

    return (
        <>
            { translations }
        </>
    )
};

export default ProfileTranslationsList;

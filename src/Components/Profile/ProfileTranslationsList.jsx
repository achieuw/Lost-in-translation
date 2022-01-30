import { useUserContext } from "../../contexts/UserContext";

const ProfileTranslationsList = () => {

    const { user } = useUserContext();
    const translations = [...user.translations, "hej", "test"]

    return (
        <div className="min-w-[360px] max-w-[500px] mt-10 pb-12 pt-7 rounded-xl form-shadow linear-white-purple">
            <h1 className="primary-font">Translations</h1>
            { translations }
        </div>
    )
};

export default ProfileTranslationsList;

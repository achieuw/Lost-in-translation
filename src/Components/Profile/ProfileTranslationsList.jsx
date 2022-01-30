import ProfileTranslationItem from "./ProfileTranslationItem";

const ProfileTranslationsList = ({ translations }) => {

    const translationItems = translations.map((translation, index) =>  <ProfileTranslationItem key={index + '-' + translation} translation={ translation }/>)

    return (
        <div className="min-w-[45%] max-w-[60%] mt-10 pb-12 pt-7 px-4 rounded-xl form-shadow linear-white-purple">
            <h1 className="primary-font">Translations</h1>
            { translationItems }
        </div>
    )
};

export default ProfileTranslationsList;

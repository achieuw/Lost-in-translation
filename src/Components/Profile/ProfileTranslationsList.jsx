import ProfileTranslationItem from "./ProfileTranslationItem";

const ProfileTranslationsList = ({ translations, handleDeleteTranslations }) => {

    const translationItems = translations.map((translation, index) =>  <ProfileTranslationItem key={index + '-' + translation} translation={ translation }/>).reverse().slice(0, 10)

    const handleDeleteLastTen = () => {
        handleDeleteTranslations()
    }

    return (
        <div className="flex flex-col min-w-[45%] max-w-[60%] mt-10 pb-12 pt-7 px-4 rounded-xl form-shadow linear-white-purple">
            <h1 className="primary-font">Translations</h1>
            { translationItems }
            <button onClick={ handleDeleteLastTen } className="self-end text-sm bg-red-600 px-2 py-1 rounded-full text-white mx-1 mt-1 body-font hover:bg-red-700">Delete translations</button>
        </div>
    )
};

export default ProfileTranslationsList;

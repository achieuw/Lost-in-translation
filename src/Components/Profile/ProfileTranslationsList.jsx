import ProfileTranslationItem from "./ProfileTranslationItem";


/**
 * Component
 * @ignore
 */
const ProfileTranslationsList = ({ translations, handleDeleteTranslations }) => {

    // create an element for each translation
    const translationItems = translations.map((translation, index) => {
        // if translation is marked as deleted, dont make an element
        if (typeof translation === 'object' && translation.deleted) {
            return
        } else if (typeof translation === 'object' && !translation.deleted) { // else if not marked as deleted, create an element
            return <ProfileTranslationItem key={index + '-'+ translation.translation} translation={ translation.translation } />
        }
        // if translation is not an object, create an element a different way
        return <ProfileTranslationItem key={index + '-' + translation} translation={ translation }/>
    }).reverse().filter(x => x).slice(0, 10)
    // reverse it to get the latest translations, remove undefined elements, 
    // and slice the first 10 elements

    // pass handling of deletion to parent
    const handleDeleteLastTen = async () => {
        await handleDeleteTranslations()
    }

    return (
        <div className="flex flex-col min-w-[45%] max-w-[60%] mt-10 pb-12 pt-7 px-4 rounded-xl form-shadow linear-white-purple">
            <h1 className="primary-font text-center">Translations</h1>
            {/* list of ProfileTranslationItems */}
            { translationItems }
            <button onClick={ handleDeleteLastTen } className="self-end text-sm bg-red-600 px-2 py-1 rounded-full text-white mx-1 mt-1 body-font hover:bg-red-700">Delete translations</button>
        </div>
    )
};

export default ProfileTranslationsList;

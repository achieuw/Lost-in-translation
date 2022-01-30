import { useState } from "react";


const ProfileTranslationItem = ({ translation }) => {

    const [deleted, setDeleted] = useState(false)

    const handleDeleteOnClick = () => {
        setDeleted(true)
    }

    return (
        <>
            {!deleted ? 
            <div className="group flex relative justify-center rounded-full border m-1 p-1 text-center body-font">
                <p> { translation } </p>
                <button onClick={ handleDeleteOnClick } className="absolute top-0 bottom-0 right-0 text-sm bg-red-600 hidden group-hover:block px-2 py-1 rounded-full text-white">Delete</button>
            </div>
            : 
            <></>}
        </>
    )
};

export default ProfileTranslationItem

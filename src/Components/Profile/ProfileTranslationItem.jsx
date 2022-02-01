import { useState } from "react";


const ProfileTranslationItem = ({ translation }) => {


    return (
        <>
            <div className="flex overflow-hidden relative justify-center rounded-full border m-1 p-1 text-center body-font">
                <p> { translation } </p>
            </div>
        </>
    )
};

export default ProfileTranslationItem

/**
 * Component
 * @ignore
 */
const ProfileHead = (props) => {

    const name = props.name;

    return (
        <>
            {/* dont render if no name provided */}
            {name !== "" ? 
            <div className="flex rounded-full input-text-col">
                <p className="primary-font primary-text-col">{name}</p> 
            </div>
            :<></>}
        </>
    )
}

export default ProfileHead
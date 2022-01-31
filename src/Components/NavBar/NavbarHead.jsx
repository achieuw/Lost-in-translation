/**
 * Dependencies
 * @ignore 
 */
import user from '/user.png'

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
            <div className="flex items-center w-fit group">
                <div className="rounded-l-full input-text-col bg-gray-400 items-center px-6 py-1 h-fit group-hover:bg-gray-500 group-hover:cursor-pointer">
                    <h5 className="primary-font primary-text-col opacity-100 pointer-events-none">{name}</h5> 
                </div>
                <div className='-ml-2 w-12 bg-gray-400 rounded-full group-hover:bg-gray-500 group-hover:cursor-pointer'>
                    <img className="invert" src={user} alt="" />
                </div>
            </div>
            :<></>}
        </>
    )
}

export default ProfileHead
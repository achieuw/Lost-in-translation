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
            <div className="flex items-center">
                <div className="rounded-l-full input-text-col bg-slate-300 items-center px-6 py-1 h-fit">
                    <h5 className="primary-font primary-text-col opacity-100">{name}</h5> 
                </div>
                <div className='-m-2 w-12 bg-slate-300 rounded-full '>
                    <img className="invert" src={user} alt="" />
                </div>
            </div>
            :<></>}
        </>
    )
}

export default ProfileHead
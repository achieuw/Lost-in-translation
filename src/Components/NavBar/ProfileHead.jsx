/**
 * Component
 * @ignore
 */
const ProfileHead = (props) => {

    const name = props.name;

    return (
        <>
            <p className="primary-font primary-text-col">{name}</p>
        </>
    )
}

export default ProfileHead
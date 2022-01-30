import UserImg from '/user.png'

const ProfileInfo = ({ username }) => {

    return (
        <div className='flex items-center'>
            <div className='-mr-1 w-32 purple rounded-full'>
            <img className='invert' src={UserImg} alt="" />
            </div>
            <div className='rounded-r-full purple px-10 py-2'>
            <h3 className='body-font primary-text-col pointer-events-none'>{ username }</h3>
            </div>
        </div>
    );
};

export default ProfileInfo

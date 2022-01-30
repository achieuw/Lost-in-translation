import Logo from "../Misc/LogoComponent.jsx"

const LoginHeader = () => {
  return (
    <>
      <div className="flex justify-center items-center primary-text-col w-full h-[40vh] bg-[#FFC75F]">
        <div className="flex flex-row justify-center h-48 items-center">
        <Logo size={100}/>
          <div className="flex flex-col text-left ml-6 mb-6">
            <h1 className="primary-font drop-shadow text-size-xl">
              Lost in Translation
            </h1>
            <h3 className="body-font text-2xl drop-shadow">Get started</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginHeader;

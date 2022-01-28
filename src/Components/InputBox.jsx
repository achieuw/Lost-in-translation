


const InputBox = (props) => {
    return(
        <>
        <input
          className="rounded-3xl border-2 border-gray-400 w-5/6 p-2 input-text-col focus:text-gray-600 bg-gray-200 outline-none focus:bg-violet-200 body-font text-2xl"
          type="text"
          placeholder={props.placeholder}
        ></input>
      </>
    )
};

export default InputBox
import { useForm } from "react-hook-form";
import { loginUser, useUserContext } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import ErrorMsgBox from '../Misc/ErrorMsgBox'
import { useState } from "react";

// Username config specs: input required, at least 2 chars
const usernameConfig = {
  required: true,
  minLength: 2,
};

const LoginForm = () => { 
  const { user, dispatch } = useUserContext();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const handleSetUsername = async (username) => {
    dispatch(await loginUser(username));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Log in user and navigate to translation view
  const onSubmit = async (data) => {
    setLoading(true)
    await handleSetUsername(data.username)
    setLoading(false)
    navigate(`/translation`)
  };

  // Set input error message element
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <span>Enter a name to continue</span>;
    }
    if (errors.username.type === "minLength") {
      return <span>Name is too short (min. length 2)</span>;
    }
  })();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[360px] max-w-[500px] -mt-20 pb-12 pt-7 rounded-xl form-shadow z-30 linear-white-purple"
    >
      <fieldset className="flex justify-center px-8">
        <div className="flex justify-center items-center h-14 g-gray-200 border-color-gray bg-gray-200 rounded-3xl">
          <span className="material-icons px-2">edit</span>
          <input
            className="border-none rounded-3xl border-2 border-gray-400 input-text-col focus:text-gray-600 outline-none bg-transparent body-font text-2xl"
            type="text"
            placeholder="What's your name?"
            {...register("username", usernameConfig)}
          ></input>
          {loading && <div className="border-t-black animate-spin inline-block w-8 h-8 border-4 rounded-full m-2" />}
          {!loading && <button type="submit" className="material-icons md-purple md-48">
            arrow_circle_right
          </button>}
        </div>
      </fieldset>
      <ErrorMsgBox errorMessage={errorMessage} />
    </form>
  );
};

export default LoginForm;

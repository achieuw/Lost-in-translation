import { useForm } from "react-hook-form";

const usernameConfig = {
  required: true,
  minLength: 3,
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Fetch user if it exists
    // else submit user
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-w-[360px] max-w-[500px] -mt-20 pb-12 pt-7 rounded-xl form-shadow z-30 linear-white-purple">
      <fieldset className="flex justify-center px-8">
        <div className="flex justify-center items-center h-14 g-gray-200 border-color-gray bg-gray-200 rounded-3xl">
        <span className="material-icons px-2">edit</span>
        <input
          className="border-none rounded-3xl border-2 border-gray-400 input-text-col focus:text-gray-600 outline-none bg-transparent body-font text-2xl"
          type="text"
          placeholder="What's your name?"
          {...register("username", usernameConfig)}
        ></input>
        <button
          type="submit"
          className="material-icons md-purple md-48">
          arrow_circle_right
        </button>
        </div>
      </fieldset>
    </form>
  );
};

export default LoginForm;

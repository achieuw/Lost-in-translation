import { useForm } from "react-hook-form";
import { getSigns } from "../../Api/Signs";
import {useState} from "react"
import TranslationBox from "./TranslationBox.jsx"
import ErrorMsgBox from "../Misc/ErrorMsgBox";

const translationConfig = {
  required: true,
  pattern:/^[A-Za-z]/
};

const Translationinput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [translations, setTranslations] = useState([])

  const submit = (data) => {
    setTranslations(getSigns(data.translation));
  };

  const errorMessage = (() => {
    if (!errors.translation) {
      return null;
    }
    if (errors.translation.type === "required") {
      return <span>Enter a sentence to continue</span>;
    }
    if (errors.translation.type === "pattern") {
      return <span>Enter valid characters (a-z)</span>;
    }
  })();
  return (
    <>
      <div className="p-10 yellow w-full">
        <form onSubmit={handleSubmit(submit)}>
          <fieldset className="flex justify-center px-8">
            <div className="flex space-between items-center h-14 g-gray-200 border-color-gray bg-gray-200 rounded-3xl min-w-[360px] w-5/6 max-w-4xl">
              <span className="material-icons px-2">edit</span>
              <input
                className="border-none rounded-3xl border-2 border-gray-400 input-text-col focus:text-gray-600 outline-none bg-transparent body-font text-2xl w-full"
                type="text"
                placeholder="Enter Translation"
                {...register("translation", translationConfig)}
              ></input>
              <button type="submit" className="material-icons md-purple md-48">
                arrow_circle_right
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <TranslationBox translations={translations} />
      <ErrorMsgBox errorMessage={errorMessage} />

    </>
  );
};
export default Translationinput;

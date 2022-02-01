import { useForm } from "react-hook-form";
import { getSigns } from "../../Api/Signs";
import { useState } from "react";
import TranslationInput from "./TranslationInput.jsx";
import ErrorMsgBox from "../Misc/ErrorMsgBox";
import { addTranslation, useUserContext } from "../../contexts/UserContext";

// Config doesnt allow empty input or characters other than a-z and white space
// and a maximum of 40 characters
const translationConfig = {
  required: true,
  pattern: /^[a-zA-Z\s]*$/,
  maxLength: 40,
};

// Form hook to handle input data
const TranslationForm = () => {
  const { user, dispatch } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Translations hook
  const [translations, setTranslations] = useState([]);

  // Output translate signs and add translate to user api
  const submit = async (data) => {
    setTranslations(getSigns(data.translation));
    dispatch(await addTranslation(user, data.translation));
    console.log(user);
  };

  // Set error message if errors in translation input (check translationConfig)
  const errorMessage = (() => {
    if (!errors.translation) {
      return null;
    }  // No input
    if (errors.translation.type === "required") {
      return <span>Enter a sentence to continue</span>;
    }  // Invalid characters
    if (errors.translation.type === "pattern") {
      return <span>Enter valid characters (a-z)</span>;
    }  // Character limit reached
    if (errors.translation.type === "maxLength") {
      return <span>Maximum amount of characters is 40.</span>;
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
      <TranslationInput translations={translations} />
      <ErrorMsgBox errorMessage={errorMessage} />
    </>
  );
};
export default TranslationForm;

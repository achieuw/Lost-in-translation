import TranslationForm from "../Components/Translation/TranslationForm";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

const TranslationView = () => {
  const {user} = useUserContext()
  const navigate = useNavigate()

  // Navigate to login view if user is not set
  useEffect(() => {
    if(user.username === "") {
      navigate("/")
    }
  }, [user])

  return (
    <>
      <TranslationForm />
    </>
  );
};
export default TranslationView;

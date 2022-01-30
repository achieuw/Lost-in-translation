const ErrorMsgBox = (props) => {
  return (
    <>
      <div className="error-message rounded-lg mt-2 w-4/6 text-center mx-auto bg-red-600 text-red-50 body-font leading-10">
        {props.errorMessage}
      </div>
    </>
  );
};

export default ErrorMsgBox

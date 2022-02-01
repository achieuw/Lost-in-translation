import HelloLogo from '/LostInTranslation_Resources/Logo-Hello-mad.png'

const NotFoundView = () => {
  return (
    <div className="w-full">
      <h1 className="text-center">404: Page Not Found</h1>
      <img src={HelloLogo} className="mx-auto mt-6 w-72"/>
    </div>
  );
};
 export default NotFoundView
const TranslationBox = (props) => {
  const signs = props.translations.map ((signs) => {
    return (
      <li className="w-20" key={signs.key}>
        {signs.sign !== null ? <img src={signs.sign}></img> : <></>}
      </li>
    );
  })

  return (
    <div className="flex justify-center mt-8">
      <div className="form-shadow bg-white shadow-neutral-600 linear-white-purple min-h-[260px] w-4/5 rounded-xl text-left p-4 flex-wrap">
        { <ul className="flex flex-wrap pb-20">{props.translations.length > 0 ? signs : <></>}</ul> } 
      </div>
    </div>
  );
};

export default TranslationBox

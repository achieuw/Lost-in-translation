const signsUrl = "LostInTranslation_Resources/individial_signs/";

// Loop through translation string and return respective sign
export const getSigns = (stringToTranslate) => {
  let keyIndex = 0; // Bad keys
  const signs = [];

  stringToTranslate.split("").forEach((c) => {
    if (c !== " ") {
      let sign = { key: keyIndex++, sign: `${signsUrl}${c}.png` };
      signs.push(sign);
    }
  });

  return signs;
};

const signsUrl = "public/LostInTranslation_Resources/individial_signs/"

export const getSigns = (stringToTranslate) => {
  let keyIndex = 0
  const signs = []

  stringToTranslate.split('').forEach(c => {
    let sign = {key: keyIndex++, sign: `${signsUrl}${c}.png`}
    signs.push(sign)
  });

  return signs
}
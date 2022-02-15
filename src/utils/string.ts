export const firstUpperCaps = (text: string) =>
  text[0].toUpperCase() + text.slice(1)

export const removeAccents = (str: string) => {
  const accents =
    'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž'
  const accentsOut =
    'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz'
  const strAccents = str.split('')
  let strAccentsOut: string[] | string = []
  const strAccentsLen = strAccents.length
  for (let y = 0; y < strAccentsLen; y++) {
    const accentsPos = accents.indexOf(strAccents[y])
    if (accentsPos != -1) {
      strAccentsOut[y] = accentsOut[accentsPos]
    } else {
      strAccentsOut[y] = strAccents[y]
    }
  }
  strAccentsOut = strAccentsOut.join('')
  return strAccentsOut
}

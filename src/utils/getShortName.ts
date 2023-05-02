export const getShortName = (names: string) => {
  const strArr = names.split(' ')
  if (strArr.includes('Mark')) {
    return `${strArr[0]} MK ${strArr[2]}`
  }

  return strArr[0]
}

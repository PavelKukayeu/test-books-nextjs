export const transformSearchString = (search: string): string => {
  const arraySearch = search.split(" ")
  let newSearch = ""
  if (arraySearch.length > 0) {
    newSearch += arraySearch[0]
    for (let i = 1; i < arraySearch.length; i++) {
      newSearch += "%20" + arraySearch[i]
    }
  } else {
    newSearch = search
  }
  return newSearch.toLowerCase()
}

import { FC, useState, KeyboardEvent, memo } from "react"
import { transformSearchString } from "../common/utils/transformSearchString"

const Search: FC<SearchPropsType> = memo(({ searchBook, disabled }) => {
  const [search, setSearch] = useState("")

  const onClickHandler = (): void => {
    searchBook(transformSearchString(search))
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      searchBook(transformSearchString(search))
    }
  }

  return (
    <div className="mt-10 text-center">
      <input
        className="border-2 border-black max-w-xs w-10/12 px-2 py-1 rounded-md"
        value={search}
        onKeyPress={onKeyPressHandler}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <button className="ml-2 hover:font-semibold" onClick={onClickHandler} disabled={disabled}>
        Search
      </button>
    </div>
  )
})

export default Search

type SearchPropsType = {
  searchBook: (search: string) => void
  disabled?: boolean
}

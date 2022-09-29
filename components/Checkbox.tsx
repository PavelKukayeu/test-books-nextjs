import React, { ChangeEvent, FC } from "react"
import { LanguagesType } from "../pages/books"

const Checkbox: FC<InputCheckbox> = ({ name, language, languages, onChangeHandler }) => {
  return (
    <label className="mr-3">
      <input
        className="cursor-pointer "
        type={"checkbox"}
        checked={languages.includes(language)}
        onChange={(e) => onChangeHandler(language, e)}
      />
      <span className="ml-1">{name}</span>
    </label>
  )
}

export default Checkbox

type InputCheckbox = {
  name: string
  language: LanguagesType
  languages: LanguagesType[]
  onChangeHandler: (language: LanguagesType, e: ChangeEvent<HTMLInputElement>) => void
}

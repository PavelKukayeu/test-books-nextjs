import React, { ChangeEvent, FC, memo } from "react"
import { LanguagesType } from "../pages/books"
import Checkbox from "./Checkbox"

export const Checkboxes: FC<CheckboxProps> = memo(({ languages, setLanguage }) => {
  const onChangeHandler = (language: LanguagesType, e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setLanguage(language, true)
    } else {
      setLanguage(language, false)
    }
  }

  return (
    <div className="my-4">
      <Checkbox
        name={"En"}
        language={"en"}
        languages={languages}
        onChangeHandler={onChangeHandler}
      />
      <Checkbox
        name={"Fi"}
        language={"fi"}
        languages={languages}
        onChangeHandler={onChangeHandler}
      />
      <Checkbox
        name={"Fr"}
        language={"fr"}
        languages={languages}
        onChangeHandler={onChangeHandler}
      />
      <Checkbox
        name={"Ru"}
        language={"ru"}
        languages={languages}
        onChangeHandler={onChangeHandler}
      />
    </div>
  )
})

type CheckboxProps = {
  languages: LanguagesType[]
  setLanguage: (language: LanguagesType, isSet: boolean) => void
}

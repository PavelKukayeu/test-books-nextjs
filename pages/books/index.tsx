import React, { FC, useCallback, useEffect, useState } from "react"
import { GetServerSideProps } from "next"
import { BookType } from "../../common/types/types"
import Search from "../../components/Search"
import Book from "../../components/Book"
import { useRouter } from "next/router"
import { Checkboxes } from "../../components/Checkboxes"
import Back from "../../components/Back"
import { useRouterLoading } from "../../common/hooks/useRouterLoading"
import { Preloader } from "../../components/Preloader"

const Books: FC<BooksProps> = ({ books }) => {
  const [searchParams, setSearchParams] = useState("")
  const [languageParams, setLanguageParams] = useState<LanguagesType[]>(["en"])

  const router = useRouter()

  const isLoading = useRouterLoading()

  useEffect(() => {
    router.push(`/books?search=${searchParams}&languages=${languageParams.join(",")}`)
  }, [searchParams, languageParams])

  const searchBook = useCallback(
    (search: string): void => {
      setSearchParams(search)
    },
    [setSearchParams]
  )

  const setLanguage = useCallback(
    (language: LanguagesType, isSet: boolean): void => {
      if (isSet) {
        setLanguageParams((languages) => [...languages, language])
      } else {
        setLanguageParams((languages) => languages.filter((el) => el !== language))
      }
    },
    [setLanguageParams]
  )

  return (
    <div className="px-10 tablet:px-20 pt-10 w-full">
      <Back href={"/"} name={"Back to home"} />
      <h1 className="text-center text-4xl">Books list</h1>
      <Search searchBook={searchBook} />
      <Checkboxes setLanguage={setLanguage} languages={languageParams} />
      {isLoading ? (
        <Preloader />
      ) : books.length ? (
        <ul className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-2.5">
          {books.map((book) => (
            <Book
              title={book.title}
              authors={book.authors[0]?.name}
              downloadCount={book.download_count}
              cover={book.formats["image/jpeg"]}
              id={book.id}
              key={book.id}
            />
          ))}
        </ul>
      ) : (
        <div className="text-center text-3xl mt-40">No cards</div>
      )}
    </div>
  )
}

export default Books

export const getServerSideProps: GetServerSideProps = async ({ resolvedUrl }) => {
  const res = await fetch(`https://gutendex.com${resolvedUrl}`)
  const { results: books } = await res.json()
  return {
    props: { books },
  }
}

type BooksProps = {
  books: BookType[]
}

export type LanguagesType = "en" | "fi" | "fr" | "ru"

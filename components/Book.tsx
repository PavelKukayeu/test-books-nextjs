import React, { FC, memo, useContext } from "react"
import Link from "next/link"
import BookInfo from "./BookInfo"
import { VisitedBooksCtx } from "./VisitedBooksProvider"

const Book: FC<BookProps> = memo(({ ...props }) => {
  const { addVisitedBooks } = useContext(VisitedBooksCtx)

  return (
    <li className="hover:opacity-80">
      <Link href={`/books/${props.id}`}>
        <a onClick={() => addVisitedBooks(props.id)}>
          <BookInfo {...props} />
        </a>
      </Link>
    </li>
  )
})

export default Book

type BookProps = {
  id: number
  title: string
  authors: string
  cover: string
  downloadCount: number
}

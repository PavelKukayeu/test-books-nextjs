import React, { FC, memo, ReactNode, useContext } from "react"
import Image from "next/image"
import { VisitedBooksCtx } from "./VisitedBooksProvider"

const BookInfo: FC<BookInfoProps> = memo(
  ({ id, title, authors, cover, downloadCount, children }) => {
    const { visitedBooks } = useContext(VisitedBooksCtx)
    let visited = false
    if (id) {
      visited = visitedBooks.includes(id)
    }

    return (
      <div
        className={`h-full p-5 border-2 border-solid border-slate-900 text-center bg-gradient-to-b from-stone-200 via-rose-200 to-red-200 ${
          visited ? "opacity-50" : ""
        }`}
      >
        <h2 className="text-lg mb-2">{title}</h2>
        <div className="italic mb-6">Authors: {authors}</div>
        <Image
          src={
            cover
              ? cover
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAp5VXoGKS16VrxT0PuDgPsktnBnT614axA&usqp=CAU"
          }
          alt={""}
          width="200px"
          height="300px"
        />
        <div>Download: {downloadCount}</div>
        <div>{children}</div>
      </div>
    )
  }
)

export default BookInfo

type BookInfoProps = {
  id?: number
  title: string
  authors: string
  cover: string
  downloadCount: number
  children?: ReactNode
}

import { BookType } from "../../common/types/types"
import { FC } from "react"
import { GetServerSideProps } from "next"
import BookInfo from "../../components/BookInfo"
import Back from "../../components/Back"

const Book: FC<BookProps> = ({ book }) => {
  return (
    <div className="px-10 tablet:px-20 pt-10">
      <Back href={"/books"} name={"Back to books"} />
      <div className="w-full mx-auto max-w-lg">
        <BookInfo
          title={book.title}
          authors={book.authors[0]?.name}
          cover={book.formats["image/jpeg"]}
          downloadCount={book.download_count}
        >
          <div className="mt-4 flex flex-col">
            {book.subjects && book.subjects.map((el, index) => <div key={index}>{el}</div>)}
          </div>
        </BookInfo>
      </div>
    </div>
  )
}
export default Book

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await fetch(`https://gutendex.com/books/${params?.id}`)
  const book = await res.json()
  return {
    props: { book },
  }
}

type BookProps = {
  book: BookType
}

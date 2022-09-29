import React, { createContext, FC, useState } from "react"

export const VisitedBooksCtx = createContext({} as VisitedBooksContextType)

const VisitedBooksProvider: FC<VisitedBooksProviderProps> = ({ children }) => {
  const [visitedBooks, setVisitedBooks] = useState<number[]>([])

  const addVisitedBooks = (id: number) => {
    if (!visitedBooks.includes(id)) {
      setVisitedBooks((visitedBooks) => [...visitedBooks, id])
    }
  }

  return (
    <VisitedBooksCtx.Provider value={{ visitedBooks, addVisitedBooks }}>
      {children}
    </VisitedBooksCtx.Provider>
  )
}

export default VisitedBooksProvider

type VisitedBooksContextType = {
  visitedBooks: number[]
  addVisitedBooks: (id: number) => void
}

type VisitedBooksProviderProps = {
  children: React.ReactNode
}

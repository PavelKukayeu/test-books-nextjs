export type BookType = {
  id: number
  title: string
  authors: AuthorsType[]
  translators: AuthorsType[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: string
  formats: FormatType
  download_count: number
}

export type AuthorsType = {
  name: string
  birth_year: number
  death_year: number
}
export type FormatType = {
  "application/x-mobipocket-ebook": string
  "application/epub+zip": string
  "application/rdf+xml": string
  "text/html; charset=utf-8": string
  "text/plain; charset=utf-8": string
  "image/jpeg": string
  "text/html": string
}

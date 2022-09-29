import "../styles/globals.css"
import type { AppProps } from "next/app"
import VisitedBooksProvider from "../components/VisitedBooksProvider"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <VisitedBooksProvider>
      <Component {...pageProps} />
    </VisitedBooksProvider>
  )
}

export default MyApp

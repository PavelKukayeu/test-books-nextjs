import Head from "next/head"
import { FC, useEffect } from "react"
import Link from "next/link"

const Home: FC = () => {
  useEffect(() => {
    const VERSION = process.env.NEXT_PUBLIC_VERSION
    if (VERSION) {
      localStorage.setItem("VERSION", VERSION)
    }
  }, [])
  return (
    <div>
      <Head>
        <title>Test Next App</title>
        <meta name="description" content="Test Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center mt-10">
        Home
        <Link href={{ pathname: "/books", query: { search: "", languages: "en" } }}>
          <a className="block mt-40 text-4xl hover:font-semibold">Books </a>
        </Link>
      </div>
    </div>
  )
}

export default Home

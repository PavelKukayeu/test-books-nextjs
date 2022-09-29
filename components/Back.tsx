import React, { FC } from "react"
import Link from "next/link"

const Back: FC<BackType> = ({ href, name }) => {
  return (
    <Link href={href}>
      <a className="hover:font-semibold">{name}</a>
    </Link>
  )
}

export default Back

type BackType = {
  href: string
  name: string
}

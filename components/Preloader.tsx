import React, { FC } from "react"
import Image from "next/image"

export const Preloader: FC = () => {
  return (
    <div className="flex justify-center align-center mt-40">
      <Image src={"/preloader.svg"} alt={"Loading..."} width="100px" height="100px" />
    </div>
  )
}

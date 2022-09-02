import React from "react"
import Image from "next/image"

const Logo = (props) => {
  let image_src = "/assets/images/logo_demo_n.png";
  return (
    <Image
      src={image_src}
      width="100em"
      height="60em"
      alt="Logo"
      {...props}
    />
  )
}

export default Logo
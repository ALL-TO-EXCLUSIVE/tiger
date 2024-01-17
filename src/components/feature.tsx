import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <div className=" flex items-center justify-center gap-20 flex-wrap-reverse">
    <div id="text" className="w-[330px] lg:w-[400px]">
      <h1 className="text-3xl  font-[tigonFont]">Revolutionary Design</h1>
      <p className=" sm:text-xl  font-mono mt-5">Our cycles are designed with cutting-edge technology and expert craftsmanship, maximizing performance and ensuring a smooth ride.</p>
    </div>
    <Image className="h-[350px] w-[350px] rounded-3xl sm:h-[450px] sm:w-[450px]" height={400} width={350} id="page4img" alt="" src={"https://framerusercontent.com/images/ieXICVRk1JqQwJUUK3mZ0bcVPT0.jpg?scale-down-to=512"} />
  </div>
  )
}

export default Feature
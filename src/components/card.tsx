import Image from 'next/image'
import React from 'react'

const Card = () => {
  return (
    <div className="h-[300px] w-full lg:w-80 lg:h-[300px] bg-[#F5A615] rounded-3xl flex flex-col gap-2 items-center justify-center text-center" id="card">
    <div className="h-[80px] w-[80px]">
    <Image src={"https://images.unsplash.com/photo-1703077851842-4ca30155bb17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"} height={80} width={80} alt="" className="bg-red-500 rounded-full h-full w-full object-cover" />
    </div>
    <h1 className="font-[tigonFont] text-2xl">Dev Patel</h1>
    <p className="text-xl font-mono">Frontend Developer</p>
  </div>
  )
}

export default Card
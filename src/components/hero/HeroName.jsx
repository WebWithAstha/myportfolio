import React from 'react'

const HeroName = () => {
  return (
    <div className="flex md:flex-row flex-col md:items-center md:gap-4 md:mt-0 mt-10">

    <div className="overflow-hidden w-max shrink-0">
        <h1
         className='move-dwn text-[20vw] md:text-[11.8vw] font-[bespoke] text-purple-400 mb-4 leading-[.8] md:-mb-4 whitespace-nowrap font-black uppercase'>Astha</h1>
      </div>
    <div className="overflow-hidden w-max shrink-0">
        <h1 className='move-dwn text-[20vw] md:text-[11.8vw] font-[bespoke] text-purple-400 mb-4 leading-[.8] md:-mb-4 whitespace-nowrap font-black uppercase'>Lodhi</h1>
      </div>
    </div>
  )
}

export default HeroName
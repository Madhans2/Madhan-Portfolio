import React from 'react'
import Typewriter from "typewriter-effect";

const text = () => {
  return (
    <section className='h-52 mt-16 md:mt-24 px-4'>
<h1 className="text-white text-3xl md:text-4xl font-bold text-center md:text-left md:ml-32">
        Who I Am? </h1>   
   <div className="flex justify-center items-center h-10 bg-black mt-16">
    <h1 className="text-4xl md:text-6xl font-bold outline-text">
      <Typewriter
        options={{
          strings: ["Full Stack Dev", "Designer", "Coder"],
          autoStart: true,
          loop: true,
          delay: 75,
        }}
      />
    </h1>
  </div>
  </section>
  )
}

export default text

import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg mx-auto flex flex-col
        justify-center w-full h-full'>
            <div >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-20'>
                Hi! I'm Jinil Panawala and I am currently a first year student 
                at the University of Waterloo (Ontario, Canada) studying Honours Computer Science. 

            </p>

            <br />

            <p className='text-xl'>
                I enjoy software development in a variety of languages, although my favorite
                although my favorite language by far is Python. I am currently looking for future
                co-op/internship positions for a software development related role. 
            </p>
        </div>
    </div>
  )
}

export default About
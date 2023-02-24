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

            <div className='justify-center text-center pt-6'>
                <a  href='/Jinil_Panawala_Resume.pdf'
                    download={true}
                    target="_blank"
                    rel="noreferrer"
                >
                    <button className=' duration-200 hover:scale-105  text-white w-fit px-6 py-2 my-2 
                                            rounded-md bg-gradient-to-r from-orange-300 to-orange-600 cursor-pointer'>
                        Download Resume
                    </button>

                </a>

            </div>
            
        </div>
    </div>
  )
}

export default About
import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white'>

        <div className='max-w-screen-lg mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>

            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Dolorem accusantium sint, pariatur dicta iste animi, illum 
                libero ipsum quos expedita laudantium? Enim voluptate sapiente 
                repudiandae delectus? Consequuntur est nobis facilis provident 
                deserunt quibusdam earum odit natus saepe accusamus laudantium quos 
                commodi quas aliquid reprehenderit quae porro esse, atque, minima in.
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Dolorem accusantium sint, pariatur dicta iste animi, illum 
                libero ipsum quos expedita laudantium? Enim voluptate sapiente 
                repudiandae delectus? Consequuntur est nobis facilis provident 
                deserunt quibusdam earum odit natus saepe accusamus laudantium quos 
                commodi quas aliquid reprehenderit quae porro esse, atque, minima in.
            </p>
        </div>
    </div>
  )
}

export default About
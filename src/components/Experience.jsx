import React from 'react'

import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import python from "../assets/python.png"
import c from "../assets/c.png"
import bash from "../assets/bash.png"
import csharp from "../assets/csharp.png"
import java from "../assets/java.png"
import github from "../assets/github.png"







const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-600'
        },
        {
            id: 7,
            src: c,
            title: 'C',
            style: 'shadow-purple-500'
        },
        {
            id: 8,
            src: bash,
            title: 'Bash',
            style: 'shadow-green-800'
        },
        {
            id: 9,
            src: csharp,
            title: 'C#',
            style: 'shadow-green-500'
        },
        {
            id: 10,
            src: java,
            title: 'Java',
            style: 'shadow-orange-600'
        },
        {
            id: 11,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
    ];

  return (
    <div name='experience' className='bg-gradient-to-b from-black to-gray-800 w-full h-full pt-14'>

        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-10'>
            
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Experience</p>
                <p className='py-6'>Through schooling, courses, and projects, I have experience in the following languages, frameworks, and technologies:</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    techs.map(({id, src, title, style}) => (
                        <div 
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className='w-20 mx-auto'/>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    </div>
  );
};

export default Experience
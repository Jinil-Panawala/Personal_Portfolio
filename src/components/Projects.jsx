import React from 'react'
import weatherApp from '../assets/projects/weatherApp.png'
import transactionTracker from '../assets/projects/transactionTracker.png'
import twitterSentimentBot from '../assets/projects/twitterSentimentBot.png'

const Projects = () => {

    const projects = [
        {
            id: 1,
            name: 'Weather App',
            src: weatherApp,
            code: 'https://github.com/Jinil-Panawala/Weather_App',
            tools: 'Python, CustomTkinter'
        },
        {
            id: 2,
            name: 'Transaction Tracker',
            src: transactionTracker,
            code: 'https://github.com/Jinil-Panawala/Transanction_Tracker',
            tools: 'Python, gspread, Zsh shell script'
        },
        {
            id: 3,
            name: 'Twitter Sentiment Bot',
            src: twitterSentimentBot,
            code: 'https://github.com/Jinil-Panawala/Transanction_Tracker',
            tools: 'Python, Twitter API, TextBlob'
        },
    ]
  return (
    <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white
    md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Here are some projects I worked on</p>
            </div>





            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            { 
                projects.map(({id, name, src, code, tools}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <p className='text-center font-bold text-xl py-3 '>
                        {name}
                    </p>
                    
                    <img src={src} 
                         alt="" 
                         className='rounded-md duration-200 hover:scale-105' />
                    
                    <div className='flex items-center justify-center'>
                        <a className='text-center items-center justify-center w-1/2 px-6 py-1 m-4 '
                            href={code}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className=' font-bold duration-200 hover:scale-105 '>Code</button>
                        </a>
                        
                    </div>

                    <p className='text-center px-3 pb-3'>{tools}</p>
                </div>
                ))
            }
                

            </div>
        </div>

    </div>
  )
}

export default Projects
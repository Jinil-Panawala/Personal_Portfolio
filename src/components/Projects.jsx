import React from 'react'
import weatherApp from '../assets/projects/weatherApp.png'
import transactionTracker from '../assets/projects/transactionTracker.png'
import twitterSentimentBot from '../assets/projects/twitterSentimentBot.png'
import stockWatchlist from '../assets/projects/stockWatchlist.png'

const Projects = () => {

    // Only showcase best 3 projects at any given time
    const projects = [ 
        {
            id: 1,
            name: 'Weather App',
            src: weatherApp,
            code: 'https://github.com/Jinil-Panawala/Weather_App',
            desc: 'A desktop application that can provide weather details for any inputted in the world.',
            tools: 'Python, CustomTkinter'
        },
        {
            id: 2,
            name: 'Transaction Tracker',
            src: transactionTracker,
            code: 'https://github.com/Jinil-Panawala/Transanction_Tracker',
            desc: 'A program that takes in a CSV file from my bank filled with transactions and' +
                    ' can classify, and list all monthly transactions in a google sheet to track income and expenses.',
            tools: 'Python, gspread, Zsh shell script'
        },
        // {
        //     id: 3,
        //     name: 'Twitter Sentiment Bot',
        //     src: twitterSentimentBot,
        //     code: 'https://github.com/Jinil-Panawala/Transanction_Tracker',
        //     desc: 'A Twitter Bot that can tweet, follow, and like tweets, as well as conduct sentiment' + 
        //             ' analysis. Tweets and their sentiment analysis can be exported in a CSV file for further work and analysis.',
        //     tools: 'Python, Twitter API, TextBlob'
        // },
        {
            id: 4,
            name: 'Stock Watchlist',
            src: stockWatchlist,
            code: 'https://github.com/Jinil-Panawala/StockWatchlist',
            desc: 'A full stack MERN app that allows users to search for stocks and view related information (including historical' +
                    ' data via charts). Also allows users to save stocks to a watchlist. ',
            tools: 'React, Express.js, Node.js, MongoDB Atlas, AWS EC2, Bootstrap'
        },
    ]
  return (
    <div name="projects" className='bg-gradient-to-b from-gray-800 to-black w-full text-white
    md:h-screen'>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-10'>
            <div className='pb-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Projects</p>
                <p className='py-6'>Here are some projects I worked on</p>
            </div>





            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            { 
                projects.map(({id, name, src, code, desc, tools}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <p className='text-center font-bold text-xl py-3 '>
                            {name}
                        </p>
                        
                        <img src={src} 
                            alt="" 
                            className='rounded-md duration-200 hover:scale-105' />
                        
                        

                        <div className='flex justify-center'>
                            <a className='text-center justify-center w-1/2 px-6 py-1 m-4 '
                                href={code}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button className=' duration-200 hover:scale-105  text-white w-fit px-6 py-2 my-2
                                        rounded-md bg-gradient-to-r from-orange-300 to-orange-600 cursor-pointer'>Code</button>
                            </a>
                            
                        </div>
                        
                        <p className='text-center px-3 pb-3 font-bold'> Stack </p>
                        <p className='text-center px-3 pb-3'>{tools}</p>
                        <p className='text-center justify-center px-3 py-6'>{desc}</p>
                    </div>
                    ))
            }
                

            </div>
        </div>

    </div>
  )
}

export default Projects
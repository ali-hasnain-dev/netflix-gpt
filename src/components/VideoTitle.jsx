import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-t from-black'>
            <h1 className='text-5xl font-bold'>{title}</h1>
            <p className='text-lg py-6 w-1/3'>{overview}</p>
            <div className='flex space-x-1'>
                <button className='bg-white text-black px-6 py-2 rounded-md hover:bg-opacity-80'> ▶ Play</button>
                <button className='bg-gray-500 text-white px-6 py-2 rounded-md bg-opacity-50'>ℹ More info</button>
            </div>
        </div>
    )
}

export default VideoTitle
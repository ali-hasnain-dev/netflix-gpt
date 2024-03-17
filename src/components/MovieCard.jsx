import React from 'react'
import { IMG_CDN_URL } from '../utils/Constanst'

const MovieCard = ({ poster, title }) => {
    console.log(IMG_CDN_URL + poster);
    return (
        <div className='w-46 px-2'>
            <img src={IMG_CDN_URL + poster} alt="poster image" />
        </div>
    )
}

export default MovieCard
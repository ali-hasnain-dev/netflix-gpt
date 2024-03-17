import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({ title, movies }) => {
    return (
        <div className='px-6'>
            <h1 className='text-3xl py-6 px-3 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll space-x-2'>
                <div className='flex'>
                    {
                        movies?.map((movie) => (
                            <MovieCard poster={movie.poster_path} title={movie.title} />

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default MoviesList
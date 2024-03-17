import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SeconadaryContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovie);
    return (
        <div className='bg-black'>
            <div className='pl-12 -mt-56 relative z-20'>
                <MoviesList title="Trending Now" movies={movies} />
                <MoviesList title="Trending Now" movies={movies} />

                <MoviesList title="Trending Now" movies={movies} />
                <MoviesList title="Trending Now" movies={movies} />
                <MoviesList title="Trending Now" movies={movies} />
                <MoviesList title="Trending Now" movies={movies} />
            </div>
        </div>
    )
}

export default SeconadaryContainer
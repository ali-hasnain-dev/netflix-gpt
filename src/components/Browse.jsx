import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SeconadaryContainer from './SeconadaryContainer';
const Browse = () => {

    useNowPlayingMovies();

    return (
        <div>
            <Header />
            <MainContainer />
            <SeconadaryContainer />
        </div>
    )
}

export default Browse
import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SeconadaryContainer from './SeconadaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    useNowPlayingMovies();

    return (
        <div>
            <Header />
            {
                showGptSearch ? <GptSearch /> :
                    <>
                        <MainContainer />
                        <SeconadaryContainer />
                    </>
            }


        </div>
    )
}

export default Browse
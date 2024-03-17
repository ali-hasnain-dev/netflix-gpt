import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackgorund from './VideoBackgorund'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies.nowPlayingMovie)
    if (!movies) return null;
    const mainMovie = movies[0];

    const { id, original_title, overview } = mainMovie
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackgorund movieId={id} />
        </div>
    )
}

export default MainContainer
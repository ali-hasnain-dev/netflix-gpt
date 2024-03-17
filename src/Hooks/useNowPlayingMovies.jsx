import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from '../utils/Constanst'

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const json = await data.json()
        dispatch(addNowPlayingMovie(json.results));
    }

    useEffect(() => {
        getNowPlayingMovies()
    }, []);
}

export default useNowPlayingMovies;
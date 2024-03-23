import React from 'react'
import GptBar from './GptBar'
import GptSuggestion from './GptSuggestion'
import { BG_IMG } from '../utils/Constanst'

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img src={BG_IMG} alt="login-background-img" />
            </div>
            <GptBar />
            <GptSuggestion />
        </div>
    )
}

export default GptSearch
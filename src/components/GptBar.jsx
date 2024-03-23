import React from 'react'
import lang from '../utils/LangConstant'
import { useSelector } from 'react-redux'

const GptBar = () => {
    const language = useSelector((store) => store.config.lang)
    return (
        <div className='pt-[8%] flex justify-center'>
            <form action="" className='w-1/2 bg-black grid grid-cols-12'>
                <input type="text" className='p-3 m-3 col-span-9' placeholder={lang[language].searchPlaceHolder} />
                <button className='p-3 m-3 col-span-3 bg-red-700 text-white rounded-lg'>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptBar
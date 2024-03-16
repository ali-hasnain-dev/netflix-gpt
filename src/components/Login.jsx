import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/ca77f965-b83c-4616-93a3-a2f8fabb378c/PK-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-background-img" />
            </div>

            <form className='absolute w-3/12 p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='text-2xl font-bold py-4'>Sign {isSignIn ? 'In' : 'Up'}</h1>
                {
                    !isSignIn && <input type="text" placeholder='Name' className='p-4 my-4 w-full bg-transparent border border-white rounded-md focus:outline-none' />
                }
                <input type="email" placeholder='Email' className='p-4 my-4 w-full bg-transparent border border-white 
                   rounded-md focus:outline-none' />
                <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-transparent border border-white 
                   rounded-md focus:outline-none' />
                <button className='p-2 my-4 bg-red-600 w-full rounded-md font-semibold'>Sign {isSignIn ? 'In' : 'Up'}</button>
                <div className='flex justify-center items-center text-white py-4'>
                    <p onClick={() => setIsSignIn(!isSignIn)} className='text-white cursor-pointer'>{isSignIn ? 'New to Netflix? Sign Up' : 'Already have an account? Sing In'}</p>
                </div>
            </form>


        </div>
    )
}

export default Login
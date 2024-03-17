import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validation } from '../utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = () => {
        setLoading(true);
        setErrorMessage(null);
        const message = !name.current ? Validation(isSignIn, '', email.current.value, password.current.value) : Validation(isSignIn, name.current.value, email.current.value, password.current.value);

        setErrorMessage(message);

        if (message) {
            alert('here')
            setLoading(false);
            return
        };

        if (!isSignIn) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode === 'auth/invalid-credential ') {
                        setErrorMessage('Invalid email or password');
                    } else if (errorCode == 'auth/email-already-in-use') {
                        setErrorMessage('Email already in use');
                    } else {
                        setErrorMessage(errorCode + " - " + errorMessage);
                    }
                });
            setLoading(false);

        } else {
            // sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode === 'auth/invalid-credential ') {
                        setErrorMessage('Invalid email or password');
                    } else {
                        setErrorMessage(errorCode + " - " + errorMessage);
                    }
                });
            setLoading(false);
        }


    }

    const hanleSignInToggle = () => {
        setErrorMessage(null);

        if (name.current) name.current.value = '';
        if (email.current) email.current.value = '';
        if (password.current) password.current.value = '';
        setIsSignIn(!isSignIn);
    }

    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/ca77f965-b83c-4616-93a3-a2f8fabb378c/PK-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="login-background-img" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black my-24 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='text-2xl font-bold py-4'>Sign {isSignIn ? 'In' : 'Up'}</h1>
                <div className='flex justify-center items-center py-2'>
                    <p className='text-red-600 font-semibold text-sm'>{errorMessage}</p>
                </div>
                {
                    !isSignIn && <input ref={name} type="text" placeholder='Name' className='p-4 my-4 w-full bg-transparent border border-white rounded-md focus:outline-none' />
                }
                <input ref={email} type="email" placeholder='Email' className='p-4 my-4 w-full bg-transparent border border-white 
                   rounded-md focus:outline-none' />
                <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-transparent border border-white 
                   rounded-md focus:outline-none' />
                <button className='p-2 my-4 bg-red-600 w-full rounded-md font-semibold' onClick={handleSubmit}>Sign {isSignIn ? 'In' : 'Up'}</button>
                {
                    !loading && (
                        <div className='flex justify-center items-center text-white py-4'>
                            <p onClick={hanleSignInToggle} className='text-white cursor-pointer'>{isSignIn ? 'New to Netflix? Sign Up' : 'Already have an account? Sing In'}</p>
                        </div>
                    )
                }

            </form>


        </div>
    )
}

export default Login
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/Constanst';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const handleSignout = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/')
            }
        });

        return () => unsubscribe();
    }, [])

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
            <img className='w-44' src={LOGO} alt="netflix-logo" />

            {
                user && (
                    <div className='flex items-center space-x-1'>
                        <img src={user?.photoURL} alt="user profile" className='rounded-full w-12 h-12' />
                        <button className='text-white font-bold' onClick={handleSignout}>Sign out</button>
                    </div>
                )
            }

        </div>
    )
}

export default Header
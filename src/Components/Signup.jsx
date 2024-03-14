import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { setActive } from '../Redux/formSlice';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: username });

            console.log("User signed up and profile updated successfully.");
        }

        catch (error) {
            console.error("Error signing up:", error.message);
        }
    };

    const handleToggle = () => {
        dispatch(setActive('login'))
    }

    return (
        <div id='signup' className='flex items-stretch shadow-2xl w-[920px]'>
            <div id="signupLeft" className='bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] flex-[0.5] px-[60px] text-center flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extrabold mb-7'>Welcome Back!</h1>
                <p className='mb-7'>If you have already signup with us please login with your personal info.</p>
                <button onClick={handleToggle} className='py-3 px-10 rounded-[25px] border border-[#fff] font-semibold w-fit transition ease-in-out duration-300 hover:bg-[#fff] hover:text-[#000] hover:border-[#000]'>Log In</button>
            </div>

            <div id="signupRight" className='flex flex-col text-[#000] px-[60px] py-[90px] flex-[0.5] bg-[#fff] text-center'>
                <div id="signupRight_Top">
                    <h1 className='text-4xl font-extrabold mb-7'>Sign Up</h1>
                </div>

                <div id="signupRight_Middle" className='flex flex-col w-full'>
                    <input type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder='Username'
                        className='py-3 px-4 mb-3 bg-[lightgray] placeholder:text-[gray]'
                    />

                    <input type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder='Email'
                        className='py-3 px-4 mb-3 bg-[lightgray] placeholder:text-[gray]'
                    />

                    <input type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder='Password'
                        className='py-3 px-4 mb-3 bg-[lightgray] placeholder:text-[gray]'
                    />
                </div>

                <div id="signupRight_Bottom" className='mt-5'>
                    <button onClick={handleSignup} className='bg-[#ff4b2b] py-3 px-10 rounded-[25px] text-[#fff] font-semibold'>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
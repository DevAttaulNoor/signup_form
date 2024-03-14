import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { setActive } from '../Redux/formSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const handleToggle = () => {
        dispatch(setActive('signup'))
    }

    return (
        <div id='login' className='flex items-stretch shadow-2xl w-[920px]'>
            <div id="loginLeft" className='flex flex-col text-[#000] px-[60px] py-[100px] flex-[0.5] bg-[#fff] text-center'>
                <div id="loginLeft_Top">
                    <h1 className='text-4xl font-extrabold mb-7'>Log In</h1>
                </div>

                <div id="loginLeft_Middle" className='flex flex-col w-full'>
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

                    <p className='text-[gray] mb-7'>Forget Your Password</p>
                </div>

                <div id="loginLeft_Bottom">
                    <button onClick={handleLogin} className='bg-[#ff4b2b] py-3 px-10 rounded-[25px] text-[#fff] font-semibold'>
                        Log in
                    </button>
                </div>
            </div>

            <div id="loginRight" className='bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] flex-[0.5] px-[60px] text-center flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extrabold mb-7'>Hello, Friend!</h1>
                <p className='mb-7'>Start the journey with us by simply entering your details.</p>
                <button onClick={handleToggle} className='py-3 px-10 rounded-[25px] border border-[#fff] font-semibold w-fit transition ease-in-out duration-300 hover:bg-[#fff] hover:text-[#000] hover:border-[#000]'>Sign up</button>
            </div>
        </div>
    )
}

export default Login
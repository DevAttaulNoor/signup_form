import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { setActive } from '../Redux/formSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError("Invalid Credential. Please try again!");
        }
    };

    const handleToggle = () => {
        dispatch(setActive('signup'));
    };

    return (
        <div id='login' className='flex items-stretch shadow-2xl w-[860px] h-[520px]'>
            <div id="loginLeft" className='flex flex-col justify-center items-center text-[#000] px-[60px] flex-[0.5] bg-[#fff] text-center'>
                <div id="loginLeft_Top">
                    <h1 className='text-4xl font-extrabold mb-7'>Log In</h1>
                </div>

                <div id="loginLeft_Bottom" className='flex flex-col w-full'>
                    <form onSubmit={handleLogin}>
                        <input type="email"
                            id="email"
                            required
                            value={email}
                            placeholder='Email'
                            onChange={(event) => setEmail(event.target.value)}
                            className='py-3 px-4 mb-3 bg-[lightgray] outline-none placeholder:text-[gray] w-full'
                        />

                        <input type="password"
                            id="password"
                            required
                            value={password}
                            placeholder='Password'
                            onChange={(event) => setPassword(event.target.value)}
                            className='py-3 px-4  bg-[lightgray] outline-none placeholder:text-[gray] w-full'
                        />

                        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}

                        <button type='submit' className='bg-[#ff4b2b] py-3 px-10 mt-6 rounded-[25px] text-[#fff] font-semibold'>
                            Log in
                        </button>
                    </form>
                </div>
            </div >

            <div id="loginRight" className='bg-gradient-to-r from-[#ff4b2b] to-[#ff416c] flex-[0.5] px-[60px] text-center flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-extrabold mb-7'>Hello, Friend!</h1>
                <p className='mb-7'>Start the journey with us by simply entering your details.</p>
                <button onClick={handleToggle} className='py-3 px-10 rounded-[25px] border border-[#fff] font-semibold w-fit transition ease-in-out duration-300 hover:bg-[#fff] hover:text-[#000] hover:border-[#000]'>Sign up</button>
            </div>
        </div >
    );
}

export default Login;
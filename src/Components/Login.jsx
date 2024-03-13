import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
    }

    return (
        <div className='login'>
            <input type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder='Email'
            />

            <input type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder='Password'
            />

            <button onClick={handleLogin}>
                Log in
            </button>
        </div>
    )
}

export default Login
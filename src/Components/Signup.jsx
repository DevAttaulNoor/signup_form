import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './Firebase/firebase';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);

            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            
            await updateProfile(userCredential.user, { displayName: username });

            console.log("User signed up and profile updated successfully.");
        } 
        
        catch (error) {
            console.error("Error signing up:", error.message);
            alert(error.message);
        }
    };

    return (
        <div className='signup'>
            <input type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder='Username'
            />

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

            <button onClick={handleSignup}>
                Sign Up
            </button>
        </div>
    );
}

export default Signup;

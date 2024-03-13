import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function Authentication() {
    const [active, setActive] = useState('login')
    return (
        <div className='authentication'>
            {active === "login" ? (
                <>
                    <Login />
                    <p>Don't have a account</p>
                    <button onClick={() => setActive('signup')}>Sign Up</button>
                </>
            ) : (
                <>
                    <Signup />
                    <p>Have a account</p>
                    <button onClick={() => setActive('login')}>Log in</button>
                </>
            )}

        </div>
    )
}

export default Authentication
import React from 'react'
import { useSelector } from 'react-redux';
import Login from './Login'
import Signup from './Signup'

function Authentication() {
    const active = useSelector((state) => state.data.form.active)

    return (
        <div id='authentication' className='flex items-center justify-center w-full h-screen'>
            {active === "login" ? (
                <Login />
            ) : (
                <Signup />
            )}
        </div>
    )
}

export default Authentication
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth } from '../Firebase/firebase'
import { logoutUser } from '../Redux/userSlice'

function Home() {
    const user = useSelector((state) => state.data.user.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logoutUser());
        signOut(auth);
    }
    
    return (
        <div id='home' className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-[#ff4b2b] to-[#ff416c]'>
            <p className='text-4xl font-extrabold mb-7'>Welcome! <span className='uppercase'>{user.username}</span></p>

            <button onClick={handleLogout} className='py-3 px-10 rounded-[25px] border border-[#fff] font-semibold w-fit transition ease-in-out duration-300 hover:bg-[#fff] hover:text-[#000] hover:border-[#000]'>
                Log out
            </button>
        </div>
    )
}

export default Home
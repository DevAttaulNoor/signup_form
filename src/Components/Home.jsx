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
        <div className='home'>
            <p>Welcome! <span>{user.username}</span></p>

            <button onClick={handleLogout}>
                Log out
            </button>
        </div>
    )
}

export default Home
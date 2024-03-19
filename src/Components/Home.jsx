import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import { auth, db, storage } from '../Firebase/firebase'
import { logoutUser, setProfileImg } from '../Redux/userSlice'

function Home() {
    const user = useSelector((state) => state.data.user.user);
    const profileImg = useSelector((state) => state.data.user.profileImg);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const handleFileChange = async (event) => {
        try {
            const selectedFile = event.target.files[0];
            const storageRef = storage.ref(`ProfileImg/${user.uid}/${selectedFile.name}`);
            await storageRef.put(selectedFile);
            const downloadURL = await storageRef.getDownloadURL();

            dispatch(setProfileImg(downloadURL));

            await db.collection('Users').doc(user.uid).set({
                photoURL: downloadURL,
            });
        }

        catch (error) {
            console.error("Error uploading profile image:", error);
        }
    };

    const handleLogout = () => {
        dispatch(logoutUser());
        dispatch(setProfileImg(''));
        signOut(auth);
    }

    useEffect(() => {
        const fetchProfileImage = async () => {
            try {
                const doc = await db.collection('Users').doc(user.uid).get();
                if (doc.exists) {
                    const data = doc.data();
                    if (data && data.photoURL) {
                        dispatch(setProfileImg(data.photoURL));
                    }
                }
                setLoading(false);
            }

            catch (error) {
                console.error('Error fetching profile image:', error);
            }
        };

        if (user) {
            fetchProfileImage();
        }
    }, [dispatch, user]);


    return (
        <div id='home' className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-[#ff4b2b] to-[#ff416c]'>
            <div className='flex flex-col items-center mb-5'>
                {loading ? (
                    <div className='flex items-center justify-center w-[86px] h-[86px] border-[2px] border-[#fff] rounded-[50%] bg-gradient-to-r from-[#ff4b2b] to-[#ff416c]'>
                        <div className="w-8 h-8 border-4 border-gray-200 rounded-full loader border-t-gray-700 animate-spin"></div>
                    </div>
                ) : (
                    <img src={profileImg} alt="img" className='w-[86px] h-[86px] border-[2px] border-[#fff] rounded-[50%] object-cover' />
                )}

                <label htmlFor="imageUpload" className='mt-1 text-xs hover:cursor-pointer'>
                    Change Profile Pic
                </label>
                <input
                    type="file"
                    id="imageUpload"
                    accept="image/*"
                    onChange={handleFileChange}
                    className='hidden'
                />
            </div>

            <p className='mb-1 text-4xl font-extrabold'>Welcome!</p>
            <span className='mb-5 text-2xl font-extrabold uppercase'> {user.username} </span>

            <button
                onClick={handleLogout}
                className='py-3 px-10 rounded-[25px] border border-[#fff] font-semibold w-fit transition ease-in-out duration-300 hover:bg-[#fff] hover:text-[#000] hover:border-[#000]'
            >
                Log out
            </button>
        </div>
    )
}

export default Home
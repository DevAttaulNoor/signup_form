import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './Firebase/firebase';
import { loginUser, setLoading } from './Redux/userSlice';
import Home from './Components/Home';
import Authentication from './Components/Authentication';
import Loader from './Components/Loader';

function App() {
    const user = useSelector((state) => state.data.user.user);
    const loading = useSelector((state) => state.data.user.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch(loginUser({
                    uid: authUser.uid,
                    username: authUser.displayName,
                    email: authUser.email,
                }))
                dispatch(setLoading(false));
            }

            else {
                dispatch(setLoading(false));
                console.log('User is not log in')
            }
        })
    }, [])

    return (
        <div className="App">
            {loading ? (
                <Loader />
            ) : (
                <>
                    {user ? (
                        <Home />
                    ) : (
                        <Authentication />
                    )}
                </>
            )}
        </div>
    );
}

export default App;
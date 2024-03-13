import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Components/Home';
import { auth } from './Components/Firebase/firebase';
import { loginUser, setLoading } from './Components/Redux/userSlice';
import Loader from './Components/Loader';
import Authentication from './Components/Authentication';

function App() {
    const dispatch = useDispatch()

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
                console.log('User is not log in')
            }
        })
    }, [])

    const user = useSelector((state) => state.data.user.user)
    const loading = useSelector((state) => state.data.user.isLoading)

    return (
        <div className="App">

            {user ? (
                <Home />
            ) : (
                <Authentication />
            )}

        </div>
    );
}

export default App;
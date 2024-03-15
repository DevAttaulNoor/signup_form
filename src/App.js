import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, setLoading } from './Redux/userSlice';
import { auth } from './Firebase/firebase';
import Home from './Components/Home';
import Loader from './Components/Loader';
import Authentication from './Components/Authentication';

function App() {
    const user = useSelector((state) => state.data.user.user);
    const loading = useSelector((state) => state.data.user.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                dispatch(loginUser({
                    uid: authUser.uid,
                    username: authUser.displayName,
                    email: authUser.email,
                }));
                dispatch(setLoading(false));
            } else {
                dispatch(setLoading(false));
                console.log('User is not logged in');
            }
        });

        return () => {
            unsubscribe();
        };
    }, [dispatch]);

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
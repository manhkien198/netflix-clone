import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { ROUTES } from './constant/routes';
import './i18n';
import { auth } from './services/firebase';
import { useAppDispatch } from './store/hooks';
import { login, logout } from './store/slices/authSlice';

function App() {
  const router = createBrowserRouter(ROUTES);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });
    return unsubcribe;
  }, []);

  return (
    <>
      <ToastContainer limit={3} />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

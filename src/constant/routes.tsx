
import { RouteObject } from 'react-router-dom';
import Landing from '../components/Landing/index';
import SignIn from '../components/Authen/SignIn';
import SignUp from '../components/Authen/SignUp';

export const ROUTES:RouteObject[]=[
    {
        path:'/',
        element: <Landing />,
    },
    {
        path:'/signin',
        element: <SignIn />,
    },
    {
        path:'/signup',
        element: <SignUp />,
    },
]

import { RouteObject } from 'react-router-dom';
import Landing from '../components/Landing/index';
import SignIn from '../components/Authen/SignIn';

export const ROUTES:RouteObject[]=[
    {
        path:'/',
        element: <Landing />,
    },
    {
        path:'/signin',
        element: <SignIn />,
    }
]
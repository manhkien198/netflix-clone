import { RouteObject } from 'react-router-dom';
import Home from '../components/Home';
import MovieDetail from '../components/Movies/MovieDetail';
import Profile from '../components/Profile';
import SignInForm from '../components/SignIn/Form/index';
import SignIn from '../components/SignIn/index';
import { ProtectedRoute } from '../shared/ProtectedRoute';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/movies',
        children: [
          {
            path: '/movies/:id',
            element: <MovieDetail />,
          },
        ],
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn />,
  },
  {
    path: '/signin/form',
    element: <SignInForm />,
  },
];

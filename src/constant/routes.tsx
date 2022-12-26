import { RouteObject } from 'react-router-dom';
import Home from '../components/Home';
import Movies from '../components/Movies';
import MovieDetail from '../components/Movies/MovieDetail';
import Profile from '../components/Profile';
import SignInForm from '../components/SignIn/Form/index';
import SignIn from '../components/SignIn/index';
import TvShows from '../components/TvShows';
import { ProtectedRoute } from '../shared/ProtectedRoute';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <ProtectedRoute children={<Home />} />,
    children: [
      {
        path: 'movies',
        element: <Movies />,
        children: [
          {
            path: '/movies/:id',
            element: <ProtectedRoute children={<MovieDetail />} />,
          },
        ],
      },
      { path: 'tvshows', element: <ProtectedRoute children={<TvShows />} /> },
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
  {
    path: '/profile',
    element: <Profile />,
  },
];

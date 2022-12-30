import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { authSelect } from '../../store/slices/authSlice';

export const ProtectedRoute = (): any => {
  const {user}=useAppSelector(authSelect)
 
  return user?<Outlet />:<Navigate to='/signin' />;
};

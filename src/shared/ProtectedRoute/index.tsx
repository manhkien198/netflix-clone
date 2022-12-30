import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { authSelect } from '../../store/slices/authSlice';

interface ProtectedRouteProps {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps): any => {
  const user = useAppSelector(authSelect)
  if (!user) return <Navigate to='/signin' />;
  return children;
};

import { ReactNode } from 'react';
import { useAppSelector } from '../../store/hooks';
import { authSelect } from '../../store/slices/authSlice';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAppSelector(authSelect);
  if (!user) return <Navigate to='/' />;
  return children;
};

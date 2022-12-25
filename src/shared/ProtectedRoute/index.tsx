import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}
export const ProtectedRoute = ({ children }: ProtectedRouteProps): any => {
  const user = localStorage.getItem('user');
  if (!user) return <Navigate to='/signin' />;
  return children;
};

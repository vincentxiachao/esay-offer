import { selectIsLoggedIn } from '@features/account/loginSlice';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to='/login' />;
  // Verifica se o usuário está autenticado
};

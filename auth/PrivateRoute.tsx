import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-native';
import { UserContext } from '../contexts/UserContext';


export default function PrivateRoute(): React.ReactElement | null {
  const user = useContext(UserContext);
  return user.username.length === 0 ? <Navigate to="/login" /> : <Outlet />
}
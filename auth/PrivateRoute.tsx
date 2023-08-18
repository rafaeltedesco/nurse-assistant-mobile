import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-native';
import { UserContext } from '../contexts/UserContext';
import { ToastAndroid } from 'react-native';


export default function PrivateRoute(): React.ReactElement | null {
  function showErrorToast() {
    const duration = 1000;
    ToastAndroid.show('Não foi possível acessar! Verifique suas credenciais!', ToastAndroid.SHORT);
    const timerId = setTimeout(() => {
      clearTimeout(timerId);
    }, duration)
    
  }

  const context = useContext(UserContext);
  if (context && context.user && context.user.username.length > 0) {
    return  <Outlet />
  }
  showErrorToast();
  return <Navigate to="/login" />;
}
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAllInstaData } from '../features/Instagram/InstaSlice.jsx';

// Protect Router
const LogoutRedirect = ({ children }) => {
  // const { logUser } = useSelector((state) => state.instagram);

  const token = Cookies.get('aToken');
  return token ? <Navigate to='/' replace /> : children;

  // return logUser ? <Navigate to='/' /> : <Outlet />;
};

export default LogoutRedirect;

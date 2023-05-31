import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getAllInstaData } from '../features/Instagram/InstaSlice.jsx';

// Protect Router
const LoggedInRedirect = ({ children }) => {
  // const { logUser } = useSelector((state) => state.instagram);

  const token = Cookies.get('aToken');

  return token ? children : <Navigate to='/login' />;

  // return logUser ? <Outlet /> : <Navigate to='/login' />;
};

export default LoggedInRedirect;

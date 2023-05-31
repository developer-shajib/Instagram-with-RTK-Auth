import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Login from '../pages/Login/Login.jsx';
import Register from '../pages/Register/Register.jsx';
import LoggedInRedirect from '../middleware/loggedInRedirect.jsx';
import LogoutRedirect from '../middleware/logoutRedirect.jsx';

//  Create router
export const PublicRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <LoggedInRedirect>
        <Home />
      </LoggedInRedirect>
    ),
  },
  {
    path: '/login',
    element: (
      <LogoutRedirect>
        <Login />
      </LogoutRedirect>
    ),
  },
  {
    path: '/register',
    element: (
      <LogoutRedirect>
        <Register />
      </LogoutRedirect>
    ),
  },
]);

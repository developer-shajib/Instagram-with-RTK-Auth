import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import { PublicRouter } from './routes/PublicRouter.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import LoggedInRedirect from './middleware/loggedInRedirect.jsx';
import LogoutRedirect from './middleware/logoutRedirect.jsx';

function App() {
  return <RouterProvider router={PublicRouter} />;
  // return (
  //   <>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route element={<LoggedInRedirect />}>
  //           <Route path='/' element={<Home />} />
  //         </Route>
  //         <Route element={<LogoutRedirect />}>
  //           <Route path='/login' element={<Login />} />
  //           <Route path='/register' element={<Register />} />
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </>
  // );
}

export default App;

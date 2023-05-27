import { RouterProvider } from 'react-router-dom';
import './App.css';
import { PublicRouter } from './routes/PublicRouter.jsx';

function App() {
  return <RouterProvider router={PublicRouter} />;
}

export default App;

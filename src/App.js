import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Items from './pages/Items';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import ItemDescription from './pages/ItemDescription';


const router = createBrowserRouter([
  {
    path: '/', element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/items', element: <Items /> },
      { path: '/items/:itemId', element: <ItemDescription /> }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

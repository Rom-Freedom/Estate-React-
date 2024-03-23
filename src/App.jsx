import HomePage from './routes/homePage/homePage';
import Layout from './routes/layout/layout';
import ListPage from './routes/listPage/listPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SinglePage from './routes/singlePage/singlePage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage/>,
        },
        {
          path: 'list',
          element: <ListPage/>,
        },
        {
          path: '/:id',
          element: <SinglePage/>,
        }
      ]
    }
  ]);

  return (
    //<div className='layout'>
    //  <div className="navbar">
    //    <Navbar/>
    //  </div>
    //  <div className="content">
    //    <HomePage/>
    //  </div>
    //</div>
    <RouterProvider router={router}/>
  );
}

export default App;
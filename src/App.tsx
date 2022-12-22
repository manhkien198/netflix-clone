import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { Provider } from 'react-redux';
import { ROUTES } from './constant/routes';
import './i18n';
import { store } from './store';
import { ToastContainer } from 'react-toastify';

function App() {
  const router=createBrowserRouter(ROUTES);
 
  
  return (
    <Provider store={store}>
      <ToastContainer limit={3}/>
      <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;

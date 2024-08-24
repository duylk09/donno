import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './routes/home.jsx'
import Resume from './routes/resume.jsx'

//import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/routes/resume.jsx',
    element: <Resume/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

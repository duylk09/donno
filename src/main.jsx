import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Root from './routes/root.jsx'
import Home from './routes/home.jsx'
import Resume from './routes/resume.jsx'
import Project1 from './routes/project1.jsx';


//import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        path: '/',
        element: <Home/>
        
      },
      {
        path: 'resume',
        element: <Resume/>
      },
      {
        path: 'project1',
        element: <Project1/>
      }
    ]
  },


], //{basename: "/donno"}
);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

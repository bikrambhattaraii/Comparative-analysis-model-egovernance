import Form from './components/form';
import React from 'react';
import Defaultlayout from './components/layouts/defaultlayout';
import Homesection from './components/homesection/homesection';
import Errorpage from './components/errorpage/errorpage';
import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Defaultlayout />,
    children: [
      {
        path: "/",
        element: <Homesection />
      },
      {
        path: "/home",
        element: <Homesection />
      },
      {
        path: "/form",
        element: <Form />,
      },
    ]
  },
  {
    path: "*",
    element: <Errorpage />,
  },
]);
export default router;

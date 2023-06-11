import Form from './components/form';
import React from 'react';
import Homesection from './components/homesection/homesection';
import Errorpage from './components/errorpage/errorpage';
import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homesection />,
    children: [
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "errorpage",
        element: <Errorpage />,
      },
    ],
  },
]);
export default router;

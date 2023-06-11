import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router';
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
    // fallbackElement={<BigSpinner />}
  />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))


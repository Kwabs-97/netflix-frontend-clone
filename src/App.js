/** @format */

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./Components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

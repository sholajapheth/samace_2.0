import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

const router = createBrowserRouter([{ path: "/", element: <Landing /> }, 
{ path: "/login", element: <Login /> }]);
const App = () => {
  return (
    <div className=" ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

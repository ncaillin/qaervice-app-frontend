import {createBrowserRouter} from "react-router-dom";
import Login from "./routes/Login"
import Home from "./routes/Home";
import Colors from "./routes/Colors"
import Register from "./routes/Register"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/colors",
    element: <Colors />,
  },
  {
    path: "/register",
    element: <Register />, 
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;

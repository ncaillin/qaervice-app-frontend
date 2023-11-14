import {createBrowserRouter} from "react-router-dom";
import Login from "./routes/Login"
import Home from "./routes/Home";
import Colors from "./routes/Colors"
import Register from "./routes/Register"
import Employees from './routes/Employees';
import Jobs from './routes/Jobs';
import Customers from './routes/Customers';
import Settings from './routes/Settings';
import Help from './routes/Help';
import EmployeeHome from './routes/EmployeeHome';
import EmployeeAddTask from './routes/EmployeeAddTask'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/employeeApp/home",
    element: <EmployeeHome />
  },
  {
    path: "/employeeApp/addTask",
    element: <EmployeeAddTask />
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
  {
    path: '/employees',
    element: <Employees />,
  },
  {
    path: '/customers',
    element: <Customers />,
  },
  {
    path: '/jobs',
    element: <Jobs />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/help',
    element: <Help />,
  },
]);

export default router;

import logo from "./logo.svg";
import "./styles/App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import AddRecipe from "./pages/AddRecipe";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "addrecipe",
      element: <AddRecipe />,
    },
    {
      path: "detail",
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

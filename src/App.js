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
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import AddRecipe from "./pages/AddRecipe";
import Maintenance from "./pages/Maintenance";
function App() {
  const maintenance = ["/detail", "/profile", "/register", "/addrecipe"];
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
      path: "profile",
      element: <Profile />,
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

  const isPageMaintenance =
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
    maintenance.find((res) => res === document.location.pathname);
  if (isPageMaintenance) {
    return <Maintenance />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;

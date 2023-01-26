import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import AddRecipe from "./pages/AddRecipe";
import Maintenance from "./pages/Maintenance";
import Logout from "./pages/Logout";
import React from "react";

// functional component
function App() {
  const maintenance = ["/detail", "/profile", "/register", "/addrecipe"];
  const [isPageMaintenance, setIsPageMaintenance] = React.useState(
    process.env.REACT_APP_IS_MAINTENANCE === "true" &&
      maintenance.find((res) => res === document.location.pathname)
  );
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
      path: "detail/:id",
      element: <Detail />,
    },
    {
      path: "logout",
      element: <Logout />,
    },
  ]);

  if (isPageMaintenance) {
    return <Maintenance maintenanceList={maintenance} />;
  } else {
    return <RouterProvider router={router} />;
  }
}

export default App;

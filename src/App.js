import logo from "./logo.svg";
import "./styles/App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

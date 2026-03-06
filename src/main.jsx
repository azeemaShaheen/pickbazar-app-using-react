import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/auth/login/Login.jsx";
import Register from "./components/auth/register/Register.jsx";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

const appRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);
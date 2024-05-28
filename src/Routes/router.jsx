import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import AllBooks from "../Pages/AllBooks";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Components/Dashboard/DashboardHome";
import ManageAllBooks from "../Components/Dashboard/ManageAllBooks";
import AddBook from "../Components/Dashboard/AddBook";
import EditBook from "../Components/Dashboard/EditBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),

    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "manage-books",
        element: <ManageAllBooks />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
      {
        path: "edit-book/:id",
        element: <EditBook />,
      },
    ],
  },
]);

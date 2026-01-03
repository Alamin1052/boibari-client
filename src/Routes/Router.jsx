import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../Pages/Home";
import AllBooks from "../Pages/AllBooks";
import BookDetails from "../Pages/BookDetails";
import AddBook from "../Pages/AddBook";
import UpdateBook from "../Pages/UpdateBook";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import MyBooks from "../Pages/MyBooks";
import PrivateRoute from "../Context/PrivateRoute";
import About from "../Pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://boibari-server.vercel.app/latest-books')
            },
            {
                path: "/all-books",
                element: <AllBooks />,
                loader: () => fetch('https://boibari-server.vercel.app/all-books')
            },
            {
                path: "/book-details/:id",
                element:
                    < BookDetails />,
            },
            {
                path: "/my-books",
                element: <PrivateRoute>< MyBooks /></PrivateRoute>,
            },
            {
                path: "/add-books",
                element: <PrivateRoute>< AddBook /></PrivateRoute>,
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: "/update-book/:id",
                element: <UpdateBook />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            }
        ]
    }
])
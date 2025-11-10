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

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/all-books",
                element: <AllBooks />,
            },
            {
                path: "/book-details",
                element: <BookDetails />,
            },
            {
                path: "/add-book",
                element: <AddBook />,
            },
            {
                path: "/update-book",
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
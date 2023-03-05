import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HeaderFooterLayout = () => {
    return <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
}

export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <h1>404 Not found</h1>,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/flat",
                element:<h1>Nos appartements</h1> 
            },
            {
                path: "/about",
                element: <h1>A propos</h1>
            }
        ],
    },
])


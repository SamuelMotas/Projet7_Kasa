import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Footer from "../layout/Footer";
import Main from "../layout/Main"
import Navbar from "../components/Navbar";

const HeaderFooterLayout = () => {
    return <>
        <Navbar />
        <Main>
            <Outlet />
        </Main>
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
                element: <h1>Appartements</h1>
            },
            {
                path: "/about",
                element: <h1>A propos</h1>
            }
        ],
    },
])


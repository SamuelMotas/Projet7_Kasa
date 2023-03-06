import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Footer from "../layout/Footer";
import Main from "../layout/Main"
import Navbar from "../components/Navbar";
import ApartmentPage from "../pages/ApartmentPage";

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
                element: <HomePage />
            },
            {
                path: "/flat",  ////* "/flat" */////
                element: <ApartmentPage />
            },
            {
                path: "/about",
                element: <h1>A propos</h1>
            }
        ],
    },
])


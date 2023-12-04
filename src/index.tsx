import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./app/routes/error-page";
import PhotoRelease from "./app/routes/photo-release";
import Landing from "./app/routes/landing";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/photo/release",
        element: <PhotoRelease />,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

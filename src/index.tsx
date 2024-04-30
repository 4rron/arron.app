import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import PhotoRelease from "./app/routes/photo-release";
import Landing from "./app/routes/landing";
import TopicSelection from "./app/routes/topic-selection";
import Root from "./app/routes/root";
import ProblemSolving from "./app/routes/problem-solving";
import Creative from "./app/routes/creative";

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Landing />} />
            <Route path="selection" element={<TopicSelection />} />
            <Route path="right-brain" element={<Creative />}>
                <Route path="photo-release" element={<PhotoRelease />} />
            </Route>
            <Route path="left-brain" element={<ProblemSolving />} />
        </Route>
    )
);

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

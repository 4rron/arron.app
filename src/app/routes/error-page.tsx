import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Page Not Found</h1>
            <p>
                Sorry, it looks like the page you requested could not be found.
            </p>
            <p>
                <i>
                    {isRouteErrorResponse(error)
                        ? error.error?.message || error.statusText
                        : "Could not determine error cause. Unknown error message."}
                </i>
            </p>
        </div>
    );
};

export default ErrorPage;

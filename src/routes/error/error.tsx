import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)

    return (
        <div id="error-page">
            <h1>You weren't supposed to see that...</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>
                    {isRouteErrorResponse(error)
                        ? `Error: ${error.status} ${error.statusText}`
                        : 'Unknown Routing Error'}
                </i>
            </p>
        </div>
    )
}

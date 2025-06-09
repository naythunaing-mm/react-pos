import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
            <p className="text-xl mb-2">Something went wrong.</p>
            <p className="text-gray-500">
                {error.status} || {error.statusText}
            </p>
        </div>
    );
}

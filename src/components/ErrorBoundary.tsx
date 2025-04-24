import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error = useRouteError();
  
  // Check if it's a route error (like 404)
  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-9xl font-bold text-blue-900">{error.status}</h1>
          <div className="w-full h-1 bg-orange-500 my-6"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {error.status === 404 ? 'Page Not Found' : error.statusText}
          </h2>
          <p className="text-gray-600 mb-8">
            {error.status === 404 
              ? "We're sorry, the page you requested could not be found. Please check the URL or navigate back to the homepage."
              : "We're sorry, something went wrong. Please try again later or contact support if the problem persists."}
          </p>
          <Link 
            to="/" 
            className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  // For other errors
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
        <div className="w-full h-1 bg-orange-500 my-6"></div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again later or contact our support team.
        </p>
        <Link 
          to="/" 
          className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-md transition-colors duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorBoundary;

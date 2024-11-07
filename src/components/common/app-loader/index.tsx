import React from 'react';

/**
 * A loading spinner component that is displayed when the application is loading.
 * This component is used to provide a visual indication to the user that the application is in a loading state.
 * It is typically used when the application is fetching data or performing other asynchronous operations.
 * The loading spinner is centered on the screen and has a semi-transparent background to draw the user's attention.
 */
const AppLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-50">
      <svg
        className="animate-spin h-12 w-12 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
};

export default AppLoader;

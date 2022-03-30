import React from 'react';

interface ErrorMessageProps {
  error: Error;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  return (
    <div className="container mx-auto my-12 max-w-5xl px-6">
      <div className="flex flex-col items-center border-2 border-red-200 bg-red-50 py-3 px-6">
        <h2 className="mb-2 text-xl font-extrabold">Something went wrong</h2>
        <p>Error: {error.message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;

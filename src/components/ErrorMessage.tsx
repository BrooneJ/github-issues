import React from 'react';

type ErrorMessageProps = {
  errorMessage: string
}

function ErrorMessage({errorMessage}: ErrorMessageProps) {
  return (
    <div>
      <div className="text-3xl mt-10 font-bold">Something Went Wrong...</div>
      <div className="text-red-500">Error occurred: {errorMessage}</div>
    </div>
  );
}

export default ErrorMessage;
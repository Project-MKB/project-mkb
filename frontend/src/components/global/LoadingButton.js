import React from "react";

const LoadingButton = ({ isLoading }) => {
  return (
    <button disabled={isLoading} type="submit" className="btn btn-success">
      {isLoading ? (
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        "Submit"
      )}
    </button>
  );
};

export default LoadingButton;

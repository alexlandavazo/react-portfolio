import React from "react";
import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col text-5xl items-center">
      <div className="flex flex-col items-start">
        <div className="mb-6">Oops,</div>
        <div>Something went wrong.</div>
      </div>

      <Link to="/" className="mt-12">
        <button className="bg-primary text-secondary">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;

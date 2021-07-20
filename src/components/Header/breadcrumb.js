import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="text-md absolute right-0 text-gray-700 px-3 focus:outline-none py-2">
      <button> Contact us</button>
      <span> | </span>
      <button>Track order</button>
      <span> | </span>
      <Link to="/auth/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Breadcrumb;

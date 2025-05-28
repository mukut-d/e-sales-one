import React from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const notify = () => toast.success("Here is your toast.");
  const notifyError = () => toast.error("Here is your toast.");

  return (
    <div className="flex-1">
      Login
      <button onClick={notify} className="button">
        Logged In
      </button>
      <button onClick={notifyError} className="button">
        Sign Up
      </button>
      <Toaster />
    </div>
  );
};

export default Login;

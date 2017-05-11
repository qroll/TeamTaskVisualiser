import React from "react";

const Login = () => {
  return (
    <div>
      <label>
        Username:
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <button>
        Login
      </button>
    </div>
  );
};

export default Login;

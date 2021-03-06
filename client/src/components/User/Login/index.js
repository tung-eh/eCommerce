import { navigate } from "@reach/router";
import React, { useContext } from "react";

import { AuthContext } from "../../AuthProvider";
import { useFetch } from "../../../hooks/useFetch";
import useFormInput from "../../../hooks/useFormInput";

const Login = () => {
  const [input, handleInputChange] = useFormInput({ email: "", password: "" });
  const { updateAuthInfo } = useContext(AuthContext);
  const { triggerFetch } = useFetch("/api/login", {
    method: "POST",
    dataObj: input,
    successCb: (data) => {
      alert("Logged in successfully");
      updateAuthInfo(data);
      navigate("/");
    },
  });

  return (
    <div>
      <input
        type="email"
        placeholder="Your email"
        value={input.email}
        onChange={handleInputChange("email")}
      />
      <input
        type="password"
        placeholder="Your password"
        value={input.password}
        onChange={handleInputChange("password")}
      />
      <button onClick={triggerFetch}>Login</button>
    </div>
  );
};

export default Login;

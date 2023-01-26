import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  React.useState(() => {
    setTimeout(() => {
      localStorage.clear();
      navigate("/");

      // localStorage.removeItem("token")
      // localStorage.removeItem("isLogin")
      // localStorage.removeItem("profile")
    }, 1500);
  });
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        role="status"
      >
        <div
          className="spinner-border text-warning"
          style={{ width: "10rem", height: "10rem" }}
          role="status"
        ></div>
      </div>
    </div>
  );
}

export default Logout;

import React from "react";

function Maintenance() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/undraw_fixing_bugs.svg"
            width="300px"
            alt="maintenance"
          />
        </div>
        <h1>Page Under Maintenance</h1>
      </div>
    </div>
  );
}

export default Maintenance;

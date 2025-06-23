import React from "react";

const Maintenance: React.FC = () => (
  <div style={{
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#fffbe6"
  }}>
    <h1 style={{ fontSize: "2.5rem", color: "#FF9933", marginBottom: "1rem" }}>Website Under Maintenance</h1>
    <p style={{ fontSize: "1.25rem", color: "#333" }}>
      We are currently performing scheduled maintenance.<br />
      Please check back soon!
    </p>
  </div>
);

export default Maintenance;
import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{  position: "absolute",
      textAlign: "center",
      bottom: "0",
      width: "100%",
      height: "2.5rem",}}>
    </footer>
  );
}

export default Footer;

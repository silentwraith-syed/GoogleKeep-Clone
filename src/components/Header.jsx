import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header style={{  backgroundColor: "#f5ba13",
      margin: "0 -32px",
      top:"",
      padding: "16px 32px",
      boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",}}>
      <h1 style={{color: "#fff",
  fontFamily: "McLaren, cursive",
  fontWeight: "200",}}> <HighlightIcon/> Google Keep</h1>
    </header>
  );
}

export default Header;
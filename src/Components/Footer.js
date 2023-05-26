import React from "react";
import "./css/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import { instagram } from "react-icons/instagram";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="icons">
        <Link to='https://www.instagram.com/genz_gorav/' target="__blank">
          <InstagramIcon id="icon" fontSize="large" />
        </Link>
        <Link to='https://twitter.com/GauravG17700572' target="__blank">
          <TwitterIcon id="icon" fontSize="large" />
        </Link>
        <Link to='https://www.linkedin.com/in/gaurav-goyal-37514826b/' target="__blank">
          <LinkedInIcon id="icon" fontSize="large" />
         </Link> 
      </div>
    </div>
  );
}

export default Footer;

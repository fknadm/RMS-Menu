import React from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { Input } from "reactstrap"
import defimg from "../assets/def_img.png"

// const history= useHistory();
const AdBanner = (from) => {
  console.log(from)

  return (
    <div className="hero-bar col-dir">
      <div className="promo-banner">
        <a target="_blank" href="https://eladeel.com/">
 <img style={{width:'100%'}} src={from.banner.url}/>
        </a>
      </div>
    </div>
  )

};

export default AdBanner;

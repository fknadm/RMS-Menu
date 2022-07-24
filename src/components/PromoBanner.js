import React from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { Input } from "reactstrap"
import defimg from "../assets/def_img.png"

// const history= useHistory();
const PromoBanner = (from) => {
  console.log(from)

  return (
    <div className="hero-bar col-dir">
      <div className="promo-banner">
      <h5>Monthly Promotion</h5>
      <div className="promo-box">
        <p className="promo-header">July Offer</p>
        <p className="promo-content">Buy 2 Fish and Chips  free <br/>1 Calamari Rings</p>
      </div>
      </div>
    </div>
  )

};

export default PromoBanner;

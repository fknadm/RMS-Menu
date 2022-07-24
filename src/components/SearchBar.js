import React from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { Input } from "reactstrap"
import defimg from "../assets/def_img.png"

// const history= useHistory();
const SearchBar = (from) => {
  console.log(from)

  return (
    <div className="hero-bar col-dir">
      <div className="search-container">
        <Input placeholder="Search" style={{ width: '100%' }} />
      </div>
    </div>
  )

};

export default SearchBar;

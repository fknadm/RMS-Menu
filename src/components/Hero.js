import React from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = (from) => {
console.log(from)
const history = useHistory();

  
return(
  <div className="hero-header">
    <div className="row-dir">
    {from.data.title !== 'Menu' ? <FontAwesomeIcon size="2x" className="chev-back space-right" onClick={() => history.goBack()} icon='chevron-left'/> : ''}

      <h4 style={{marginBottom:'0'}}>{from.data.title}</h4>
    </div>
    <div>
        <p className="circleTable">{from.data.table}</p>
    </div>
  </div>
)};

export default Hero;

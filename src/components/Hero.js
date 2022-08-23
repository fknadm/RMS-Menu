import React from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = (from) => {
  
console.log(from)

const history = useHistory();

const navTo = () => {
  history.push("/check");
}

  
return(
  <div className="hero-header">
    <div className="row-dir">
    {from.data.title !== 'Menu' ? <FontAwesomeIcon size="2x" className="chev-back space-right" onClick={() => history.goBack()} icon='chevron-left'/> : ''}

      <h4 style={{marginBottom:'0'}}>{from.data.title}</h4>
    </div>
    <div onClick={()=>navTo()}>
        <p className="circleTable">{from.data.table}</p>
    </div>
    {from.myOrder.length >= 1 ? <p className="cart-noti2">{from.myOrder.length}</p> : ''}
  </div>
)};

export default Hero;

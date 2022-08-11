import React from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendNewOrder } from "../utils/fetch";

const SumCheck = (from) => {

  console.log(from)
  const history = useHistory();

  const data = from.data

  const taxSet = 0.00

  const bTax = data.reduce((n, { price }) => n + Number(price), 0)

  const calcTax = (amount, tax) => {
    var calc = (parseFloat(amount) * parseFloat(tax))
    var tval = calc + amount
    return { total: tval.toFixed(2), tvalue: calc.toFixed(2) }

  }

  console.log(calcTax(bTax, taxSet))

  const navTo = () => {
    history.push("/thanks");
  }

  return (
<>
    {from.view === 'cart' ?  <div className="hero-header force-bottom">
      <div className="staggered-flex">
        <div className="row-dir between"><p className="tbal">Total: </p><p style={{fontSize:"25px",color:"#E3B100"}} className="tbal">RM{calcTax(bTax, taxSet).total}</p></div>
        <div className="row-dir between"><p className="btax">Before Tax: </p><p className="btax">RM{bTax.toFixed(2)}</p></div>
      <div className="row-dir between"><p className="tval">Tax & Service Charge </p><p className="tval">RM{calcTax(bTax, taxSet).tvalue}</p></div>
      <button onClick={() => {sendNewOrder(from.fetchData);navTo()}} className="addCart">Place Order</button>

    </div>

  </div > :
    <div className="hero-header force-bottom-n">
    <div className="staggered-flex">
      <div className="row-dir between"><p className="tbal">Total: </p><p style={{fontSize:"25px",color:"#E3B100"}} className="tbal">RM{calcTax(bTax, taxSet).total}</p></div>
      <div className="row-dir between"><p className="btax">Before Tax: </p><p className="btax">RM{bTax.toFixed(2)}</p></div>
    <div className="row-dir between"><p className="tval">Tax & Service Charge </p><p className="tval">RM{calcTax(bTax, taxSet).tvalue}</p></div>
  </div>

</div >
  }
   
  </>
)};

export default SumCheck;

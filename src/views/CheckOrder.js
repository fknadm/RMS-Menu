import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Container, Row, Col } from "reactstrap";

import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import hlogo from "../assets/hlogo.png"
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { NavLink as RouterNavLink, useHistory, Link } from "react-router-dom";
import MainOrder from "../components/MainOrder";
import SumCheck from "../components/SummaryCheck";

import { Input } from "reactstrap";


const CheckOrder = (data) => {

  const [inputT,setInput] = useState([])
  const [hide,setHide] = useState(false)

  const history = useHistory();

  useEffect(() => {
    data.setHide(true)
    const app = document.getElementById('app').style
    app.overflowY = "scroll"

    if (hide) {
      document.body.style.overflow='hidden'
    } 

    else if (!hide) {
      document.body.style.overflow='scroll'
    }

    data.setForce(false) 

      
  }, []);


  const navTo = () => {
    history.push("/home");
  }

  const sprop = {
    table: data.tableData,
    title: 'My Orders'
  }


  return (
    <>
    <Hero myOrder={data.myOrder} data={sprop}/>
    {data.tableData < 1 ? <>
      <div className="modalConfirm">
      </div>
      <div className="modalInner-n">
        <div className="modalTotal-n">
        <h2>
            Hi! What's your table number?
          </h2>
          <Input onChange={(e) => { setInput(e.target.value) }} placeholder="Table No." type="text" maxLength={2} />
          <button className="btn-sub-t" onClick={() => {data.setTable(inputT);setHide(true)}}>Submit</button>
        </div>

      </div> 
    </> : ''}
    <div className="bg-land2">
      <div className="landing-inner"> 
        <div >
          {data.myOrder.map(item => {
            return(
              <div className="checkCard">
              <div className="checkHeader">
                 <p>Order No. <b>{item.orderId}</b></p>
               <p>Order Status:</p> {item.status === 'pending' ? <p style={{backgroundColor:'yellow',fontSize:'12px',padding:'2px 8px'}}>{item.status}</p> : item.status === 'ready' ? <p style={{backgroundColor:'blue',color:'#ffffff',fontSize:'12px',padding:'2px 8px'}}>{item.status}</p > : item.status === 'complete' ? <p style={{backgroundColor:'green',color:'#ffffff',fontSize:'12px',padding:'2px 8px'}}> {item.status}</p> : ''} 
              </div>
              <div>
                <p className="checkTitle"><b>Food Items</b></p>
                {item.food.map(food => {
                  return(
                    <div className="iTitle">
                     <p>{food.f_name}</p>
                     {food.status  === 'pending' ? <p>Preparing in Kitchen</p> : food.status === 'ready' ? <p>Serving Now</p> : <p>Served</p>}
                     <p>RM{food.iprice}</p>

                     </div>
                  )
                })}
              </div>

              <div>
                <p className="checkTitle"><b>Drink Items</b></p>
                {item.drink.map(drink => {
                  return(
                    <div className="iTitle">
                    <p>{drink.f_name}</p>
                    {drink.status  === 'pending' ? <p>Preparing in Kitchen</p> : drink.status === 'ready' ? <p>Serving Now</p> : <p>Served</p>}
                    <p>RM{drink.iprice}</p>

                    </div>
                 

                  )
                })}
              </div>
              <div>
                <h5  className="tbill">Total Bill: RM{item.tprice}</h5>
              </div>
          
              </div>
            )
          })}
        
        </div>

        <div>
        </div>

      </div>
    </div>
    </>
  )
};

export default CheckOrder;

import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Form } from "reactstrap";

import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import hlogo from "../assets/hlogo.png"
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { NavLink as RouterNavLink, useHistory, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Input } from "reactstrap";


const PreMenu = (data) => {
  const root = document.getElementById('root').style
  const body = document.body.style
  const history = useHistory();

  const [vis, setVis] = useState([])

  useEffect(() => {
    data.setHide(true)
    body.background = "#FFD53E"
    root.display = "flex"
    root.justifyContent = "center"
    root.alignItems = "center"
    data.setForce(true)

  }, []);

  const handleTable = (from) => {
    const tableNo = from.target.value
    data.setTable(tableNo)
  }

  const navigate = useCallback(() => history.push('/home'), [history])

  const propa = {
    "datap": "Order your food & beverages here.",
    "datat": "The Hooks Menu"
  }

  const appe = data.prop.filter(x => x.category === 'Appetizer').map(y => {
    return (
      <div className="item-men" style={{ display: 'flex' }}>
        <div>
          <img style={{ maxWidth: "50px",paddingRight:'5px' }} src={y.img_url} />
        </div>
        <div>
          <p><b>{y.name}</b></p>
          <p>RM{y.price}</p>
         

          <p style={{fontSize:'11px'}}>{y.desc}</p>
        </div>
      
      </div>
    )
  })

  const mains = data.prop.filter(x => x.category === 'Mains' || x.category === 'Sandwiches' || x.category === 'Grill').map(y => {
    return (
      <div className="item-men" style={{ display: 'flex' }}>
        <div>
          <img style={{ maxWidth: "50px",paddingRight:'5px' }} src={y.img_url} />
        </div>
        <div>
          <p><b>{y.name}</b></p>
          <p>RM{y.price}</p>

          <p style={{fontSize:'11px'}}>{y.desc}</p>
        </div>

      </div>
    )
  })

  const lunchSet = data.prop.filter(x => x.category === 'LunchSet').map(y => {
    return (
      <div className="item-men" style={{ display: 'flex' }}>
        <div>
          <img style={{ maxWidth: "50px",paddingRight:'5px' }} src={y.img_url} />
        </div>
        <div>
          <p><b>{y.name}</b></p>
          <p>RM{y.price}</p>

          <p style={{fontSize:'11px'}}>{y.desc}</p>
        </div>

      </div>
    )
  })

  const pasta = data.prop.filter(x => x.subCat === 'Pasta').map(y => {
    return (
      <div className="item-men" style={{ display: 'flex' }}>
        <div>
          <img style={{ maxWidth: "50px",paddingRight:'5px' }} src={y.img_url} />
        </div>
        <div>
          <p><b>{y.name}</b></p>
          <p>RM{y.price}</p>

          <p style={{fontSize:'11px'}}>{y.desc}</p>
        </div>

      </div>
    )
  })


  const sand = data.prop.filter(x => x.category === 'Sandwiches').map(y => {
    return (
      <div className="item-men" style={{ display: 'flex' }}>
        <div>
          <img style={{ maxWidth: "50px",paddingRight:'5px' }} src={y.img_url} />
        </div>
        <div>
          <p><b>{y.name}</b></p>
          <p>RM{y.price}</p>

          <p style={{fontSize:'11px'}}>{y.desc}</p>
        </div>

      </div>
    )
  })


  const drink = data.prop.filter(x => x.category === 'Drinks').map(y => {
    return (
      <div className="item-men" style={{ display: 'flex' }}>
        <div>
          <img style={{ maxWidth: "50px",paddingRight:'5px' }} src={y.img_url} />
        </div>
        <div>
          <p><b>{y.name}</b></p>
          <p>RM{y.price}</p>

          <p style={{fontSize:'11px'}}>{y.desc}</p>
        </div>

      </div>
    )
  })



  const handleVis = (e) => {
    if (vis === e) {
      setVis([])
    }

    else {
      setVis(e)
    }
  }


  return (
    <div className="bg-land-2">
      <img className="landing-logo" src={hlogo} />
      <div className="landing-inner" style={{ width: '100%',marginBottom:'15px' }}>
        <div style={{marginBottom:'15px'}}>

          <div className="clsp" onClick={() => handleVis('appe')}>
           <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <h5>Appetizers</h5>
          {vis === 'appe'?  <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
            </div> 
            <div className="clsp-n" style={vis === 'appe' ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
              {appe}
            </div>
          </div>


          <div className="clsp" onClick={() => handleVis('mains')}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <h5>All Mains</h5>
          {vis === 'mains'?  <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
            </div> 
            <div className="clsp-n" style={vis === 'mains' ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
              {mains}
            </div>
          </div>
{/* 
          <div className="clsp" onClick={() => handleVis('lunchSet')}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <h5>Lunch Set</h5>
          {vis === 'lunchSet'?  <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
            </div> 
            <div className="clsp-n" style={vis === 'lunchSet' ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
              {lunchSet}
            </div>
          </div> */}

          <div className="clsp" onClick={() => handleVis('pasta')}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <h5>Pasta</h5>
          {vis === 'pasta'?  <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
            </div> 
            <div className="clsp-n" style={vis === 'pasta' ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
              {pasta}
            </div>
          </div>

          <div className="clsp" onClick={() => handleVis('sand')}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <h5>Sandwiches</h5>
          {vis === 'sand'?  <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
            </div> 
            <div className="clsp-n" style={vis === 'sand' ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
              {sand}
            </div>
          </div>

          <div className="clsp" onClick={() => handleVis('drink')}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
           <h5>Beverages</h5>
          {vis === 'drink'?  <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
            </div> 
            <div className="clsp-n" style={vis === 'drink' ? { display: 'flex', flexDirection: 'column' } : { display: 'none' }}>
              {drink}
            </div>
          </div>
        </div>

        <Link
          onClick={() => data.setHide(false)}
          to={"/home"}
          state={data}
        >
          <button className="order-button"> Order Now</button>

        </Link>
      </div>
    </div>
  )
};

export default PreMenu;

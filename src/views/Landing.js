import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Container, Row, Col } from "reactstrap";

import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import hlogo from "../assets/hlogo.png"
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { NavLink as RouterNavLink, useHistory, Link } from "react-router-dom";

import { Input } from "reactstrap";


const Landing = (data) => {

  const root = document.getElementById('root').style
  const body = document.body.style
  const history = useHistory();

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

  return (
    <div className="bg-land">
      <img className="landing-logo" src={hlogo} />
      <div className="landing-inner">
        <h2 className="landing-title">The Hooks</h2>
        <Input onChange={(e) => { handleTable(e) }} placeholder="Table No." type="text" maxLength={2} />
        <Link
        onClick={() =>data.setHide(false)}
          to={"/home"}
          state={data}
        >
                  <button className="order-button"> Order Now</button>

        </Link>
      </div>
    </div>
  )
};

export default Landing;

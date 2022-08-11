import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Container, Row, Col } from "reactstrap";

import Hero from "../components/Hero";
import NavBar from "../components/NavBar"
import hlogo from "../assets/hlogo.png"
import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { NavLink as RouterNavLink, useHistory, Link } from "react-router-dom";

import { Input } from "reactstrap";


const Thanks = (data) => {

  const root = document.getElementById('root').style
  const body = document.body.style
  const history = useHistory();

  useEffect(() => {
    data.setHide(true)
    body.background = "#FFD53E"
    root.display = "flex"
    root.justifyContent = "center"
    root.alignItems = "center"
  }, []);


  return (
    <div className="bg-land">
      <img className="landing-logo" src={hlogo} />
      <div className="landing-inner">
        <h2 className="landing-title">Thank You For Your Order!</h2>
      </div>
    </div>
  )
};

export default Thanks;

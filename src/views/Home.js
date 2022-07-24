import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import Hero from "../components/Hero";
import MainOrder from "../components/MainOrder";

import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PromoBanner from "../components/PromoBanner";

import "../App.css"
import FoodCarousell from "../components/FoodCarousel";
import PopSec from "../components/PopularSection";
import SearchBar from "../components/SearchBar";

const root = document.getElementById('root').style

const Home = (something) => {
  const body = document.body.style
  root.display = "flex"
  root.flexDirection = "column"
  root.justifyContent = "flex-start"
  root.alignItems = "flex-start"
  console.log(something.prop, 'app>Home')

  const [dataState, setDataState] = useState([]);
  const [show, setShow] = useState(false)
  const [focus, setFocus] = useState([])

  useEffect(() => {
    body.background = "#ffffff"

  }, []);

  let history = useHistory()
  let location = useLocation()
  const { user } = useAuth0();


  const sprop = {
    table: something.tableData,
    title: 'Menu'
  }

  const conData = {
    title:'Popular',
    focus:'Pasta'
  }


  return (

    <>
      <Hero data={sprop} />
      <SearchBar data={something.prop}/>
      <FoodCarousell data={something.prop}/>
      <PromoBanner data={something.prop}/>
      <PopSec context={conData} data={something.prop} />

    </>
  )
};

export default Home;

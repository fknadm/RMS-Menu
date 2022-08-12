import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Form } from "reactstrap";

import qs from 'qs'

import Hero from "../components/Hero";
import MainOrder from "../components/MainOrder";
import { Input } from "reactstrap";

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
  let location = useLocation()

  const [dataState, setDataState] = useState([]);
  const [show, setShow] = useState(false)
  const [focus, setFocus] = useState([])
  const [inputT,setInput] = useState([])
  const [hide,setHide] = useState('scroll')


  const queryObject = qs.parse(location.search, { ignoreQueryPrefix: true }).t

  useEffect(() => {
    body.background = "#ffffff";

    if (queryObject) {
      something.setTable(queryObject)
    }

  }, []);

  let history = useHistory()
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
      {something.tableData < 1  ? 
      <>
    <div className="modalConfirm">
    {    document.body.style.overflow='hidden'}

      </div>
      <div className="modalInner-n">
        <div className="modalTotal-n">
        <h2>
            Hi! What's your table number?
          </h2>
          <Input onChange={(e) => { setInput(e.target.value) }} placeholder="Table No." type="text" maxLength={2} />
          <button className="btn-sub-t" onClick={() => {something.setTable(inputT);document.body.style.overflow='scroll'}}>Submit</button>
        </div>

      </div>  
      </>
      : ''
    }
      <SearchBar data={something.prop}/>
      <FoodCarousell data={something.prop}/>
      <PromoBanner data={something.prop}/>
      <PopSec context={conData} data={something.prop} />

    </>
  )
};

export default Home;

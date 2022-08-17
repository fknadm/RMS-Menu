import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Form } from "reactstrap";
import { ordersFetch } from "../utils/fetch";
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
  const [hide,setHide] = useState(false)


  const queryObject = qs.parse(location.search, { ignoreQueryPrefix: true }).t

  useEffect(() => {

    ordersFetch().then(res =>{

      const pending = res.filter(x => {return x.status === 'pending' && x.table_no === something.tableData})
      something.setMyorder(pending)
    
    })


    body.background = "#ffffff";

    if (queryObject) {
      something.setTable(queryObject)
    }

    if (hide) {
      document.body.style.overflow='hidden'
    } 

    else if (!hide) {
      document.body.style.overflow='scroll'
    }

   something.setForce(false)



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
      <Hero myOrder={something.myOrder} data={sprop} />
      {something.tableData < 1  ? 
      <>
    <div className="modalConfirm">
      </div>
      <div className="modalInner-n">
        <div className="modalTotal-n">
        <h2>
            Hi! What's your table number?
          </h2>
          <Input onChange={(e) => { setInput(e.target.value) }} placeholder="Table No." type="text" maxLength={2} />
          <button className="btn-sub-t" onClick={() => {something.setTable(inputT);setHide(true)}}>Submit</button>
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

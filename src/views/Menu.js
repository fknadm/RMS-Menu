import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import Hero from "../components/Hero";
import MainOrder from "../components/MainOrder";

import Loading from "../components/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getFirestore, collection } from 'firebase/firestore';

import "../App.css"
import SearchBar from "../components/SearchBar";

const Menu = (data) => {
  let history = useHistory()
  let location = useLocation()
  // document.body.style.overflow = "scroll"
  console.log(data, 'app>menu')
  const [show, setShow] = useState(false)
  const [focus, setFocus] = useState([])

  useEffect(() => {
    data.setForce(false)

  }, []); 

 
  const items = data.prop

  if (location.state) {
    if (location.state.context === 'All Items') {
      var dataContext = items
    }
  
    if (location.state.context === 'Appetizer') {
      var dataContext = items.filter(x => x.category === "Appetizer" && x.avail)
    }
  
    if (location.state.context === 'Pasta') {
      var dataContext = items.filter(x => x.category === "Pasta" && x.avail)
    }
  
    if (location.state.context === 'Drinks') {
      var dataContext = items.filter(x => x.category === "Drinks" && x.avail)
    }
  
    if (location.state.context === 'Sandwiches') {
      var dataContext = items.filter(x => x.category === "Sandwiches" && x.avail)
    }
    if (location.state.context === 'Mains') {
      var dataContext = items.filter(x => x.category === "Sandwiches" || x.category === "Grill" || x.category === "Mains" && x.avail)
    }
    if (location.state.context === 'Grill') {
      var dataContext = items.filter(x => x.category === "Grill" && x.avail)
    }
  }
  else {
    var dataContext = items
  }


  if (location.state) {
    var sprop = {
      table: data.tableData,
      title: location.state.context,
      init: items,
      context:'full'
    }
  }

  else {
    var sprop = {
      table: data.tableData,
      title: 'All Items',
      init: items,
      context:'full'
    }
  }
  
 


  return (

    <>
       <Hero myOrder={data.myOrder} data={sprop} />
      <SearchBar data={items} />
      <MainOrder data2={sprop} data={dataContext} setFocus={setFocus} setShow={setShow}/>
    </>
  )
};

export default Menu

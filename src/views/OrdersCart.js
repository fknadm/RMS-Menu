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
import SumCheck from "../components/SummaryCheck";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Orders = (data) => {
  let history = useHistory()
  let location = useLocation()
  // document.body.style.overflow = "scroll"
  
  const [show, setShow] = useState(false)
  const [focus, setFocus] = useState([])

  useEffect(() => {
  }, []); 

 
  const items = data.prop
  const menu = data.data
  const { user } = useAuth0();

  // if (location.state.context === 'All Items') {
  //   var dataContext = items
  // }

  // if (location.state.context === 'Appetizer') {
  //   var dataContext = items.filter(x => x.category === "Appetizer")
  // }

  // if (location.state.context === 'Pasta') {
  //   var dataContext = items.filter(x => x.category === "Pasta")
  // }

  if (items.length === 1) {
    var title = items.length+' item in Order'
  }
  else if (items.length === 0) {
    var title =  'No items in Order'
  }

  else if (items.length >= 2) {
    var title = items.length+' items in order'
  }
 
  var sprop = {
    table: data.tableData,
    title: title,
    init: items,
    context: 'segmented'
  }
  var gvar1 = []


  const pusher = (e) => {
    gvar1.push({
      entry:e
    })
  }

  const testset = menu.map(y => {return y.name})

  for (let i=0; i < testset.length;i++) {
    const retest = items.filter(x => x.name === testset[i] )
    if (retest.length) {
        const singleset = {multiname: testset[i], data:{qty:retest.length, dataSet:retest}}
       pusher(singleset)
    }

  }

  return (

    <>
       <Hero data={sprop} />
       {items.length < 1 ? <h5 className="notice-sm">Add Items to your order to continue</h5> : ''}
      <MainOrder data2={sprop} data={items} setFocus={setFocus} setShow={setShow} mqty={gvar1}/>
      {items.length >= 1 ? <SumCheck data={items}/> : ''}
      {/* <SumCheck data={items}/> */}

    </>
  )
};

export default Orders

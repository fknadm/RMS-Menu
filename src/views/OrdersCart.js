import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Input } from "reactstrap";

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
  const [newArr, setNewArr ] = useState([])
  const [inputT,setInput] = useState([])
  const [hide,setHide] = useState(false)


  useEffect(() => {
    if (hide) {
      document.body.style.overflow='hidden'
    } 

    else if (!hide) {
      document.body.style.overflow='scroll'
    }

    data.setForce(false)

  }, []); 

 
  const items = data.prop
  const menu = data.data

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

  console.log(items,sprop,'LOOK HERE')


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

  var foodItems = items.filter(x => x.category !== 'Drinks')
  var drinkItems = items.filter(y => y.category === 'Drinks')


  var mFoodItems = foodItems.map(item => {return {comments:item.comms,f_name:item.name,status:'pending','tid':item.tid,iprice:item.price,'category':item.category}})
  var mDrinkItems = drinkItems.map(item => {return {comments:item.comms,f_name:item.name,status:'pending','tid':item.tid,iprice:item.price,'category':item.category}})

  return (

    <>
       <Hero myOrder={data.myOrder} data={sprop} />
       {show ?       <>
    <div className="modalConfirm">
      </div>
      <div className="modalInner-n">
        <div className="modalTotal-n">
        <h2>
            Hi! What's your table number?
          </h2>
          <Input onChange={(e) => { setInput(e.target.value) }} placeholder="Table No." type="text" maxLength={2} />
          <button className="btn-sub-t" onClick={() => {data.setTable(inputT);setHide(true);setShow(false)}}>Submit</button>
        </div>

      </div>  
      </> : ''}
       {items.length < 1 ? <h5 className="notice-sm">Add Items to your order to continue</h5> : ''}
      <MainOrder data2={sprop} data={items} setNewCart={data.setCart} setFocus={setFocus} setShow={setShow} mqty={gvar1}/>
      {items.length >= 1 ? <SumCheck refresh={data.setOrders} setShow={setShow} view={'cart'} tdata={data.tableData } fetchData={{tdata:sprop,fdata:mFoodItems,ddata:mDrinkItems}} data={items}/> : ''}
      {/* <SumCheck data={items}/> */}

    </>
  )
};

export default Orders

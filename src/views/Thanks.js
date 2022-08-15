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


const Thanks = (data) => {

  const root = document.getElementById('root').style
  const app = document.getElementById('app').style
  const nav = document.getElementById('todel').style

  const body = document.body.style
  const history = useHistory();

  useEffect(() => {
    data.setHide(true)
    body.background = "#FFD53E"
    root.display = "flex"
    root.justifyContent = "center"
    root.alignItems = "center"
    app.overflowY = "scroll"

    data.setCart([])
    data.setForce(true)


  }, []);

  const items = data.prop
  const menu = data.data

  const navTo = () => {
    history.push("/home");
  }

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
    context: 'thanks'
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

  console.log(data.cart, 'PROOOOP')

  const foodArr = data.cart.filter(items => items.name !== 'Drinks')
  const drinkArr = data.cart.filter(items => items.name === 'Drinks')


  return (
    <div className="bg-land">
      <img className="landing-logo" src={hlogo} />
      <div className="landing-inner">
        <h2 className="landing-title">Your order has been placed!</h2>
        <div className="btn-home">
        <button className="btn-h" onClick={()=>navTo()}>Return Home</button>
        </div>
        <h4 className="landing-table">Table: {data.tableData}</h4>
        <h3 className="landing-inst">Order Receipt:</h3>

        <div>
        <MainOrder view={'thanks'} data2={sprop} data={data.cart} mqty={gvar1}/>
        <SumCheck view={'thanks'} data={data.cart}/>
        </div>

      </div>
    </div>
  )
};

export default Thanks;

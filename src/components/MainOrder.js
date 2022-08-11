import React, { useState, useEffect } from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newlogo from "../assets/fblog.png"
import "../App.css"
import Moment from 'react-moment';
import moment from 'moment';
import defimg from '../assets/def_img.png'
import { UncontrolledCollapse, Collapse, Button, CardBody, Card } from 'reactstrap';
import { cartDel } from "../utils/cartHandler";

const MainOrder = (from) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cFood, setcFood] = useState(false)
  const multiTarget = from.mqty

  const specs = from.data2

  useEffect(() => {
  }, []);

  const toggle = () => setIsOpen(!isOpen);
  const datatype = from.data2.order
  const dataArray = from.data
  const context = from.data2

  if (specs.context === 'full') {
    var renderItems =

      dataArray.map(item => {

        return (
          <Link
            tag={RouterNavLink}
            to={{
              pathname: '/item',
              state: { single: item, global: context.init }
            }}
            exact
            activeClassName="router-picked"
          >
            <div className="item-container row-dir">
              <div className="item-img-container">
                <img className="item-img" src={item.img_url} />
              </div>

              <div className="text-mid">
                <p className="item-title">{item.name}</p>
                <p className="item-desc">{item.desc}</p>
                {/* <div className="counter-row">
                  <FontAwesomeIcon className="addIcon" icon="minus-circle" />
                  <p style={{ padding: '10px' }}>0</p>
                  <FontAwesomeIcon className="addIcon" icon="plus-circle" />

                </div> */}
              </div>

              <div className="last-col">
                {item.chefrec ? <FontAwesomeIcon className="star" icon="star" /> : <p></p>}
                <p className="item-price">RM{item.price}</p>
              </div>
            </div>
          </Link>
        )
      })
  }

  else if (specs.context === 'segmented') {

    if (multiTarget) {
      var tgt = multiTarget.map(x => x.entry)
      var mname = tgt.map(x => x.multiname)
    }

    var multipleOrdersFood = []
    var multipleOrdersDrink = []

    var food = dataArray.filter(x => x.category !== "Drinks")
    var drinks = dataArray.filter(x => x.category === "Drinks")

    if (food.length > 0) {
      for (let i = 0; i < mname.length; i++) {
        var foodArrays = food.filter(x => x.name === mname[i])[0]
        var foodArrayQty = food.filter(x => x.name === mname[i]).length
        console.log(foodArrays, 'FOOD RAW ARRAY AFTER FILTER')

        //NEED TO FIX LOGIC FOR PUSH

        if (foodArrays) {
          multipleOrdersFood.push({
            ...multipleOrdersFood.entry,
            entry: { itemName: mname[i], data: foodArrays, qty: foodArrayQty }
  
          })
        }
       

      }

      if (multipleOrdersFood.length > 0) {
        var multiFood = multipleOrdersFood.map(x => x.entry)
        var multiFoodData = multiFood.map(x => x.data)

      }

      console.log('array food:',multipleOrdersFood)
      console.log('data:',multiFood)

    }

    if (drinks.length > 0) {
      for (let i = 0; i < mname.length; i++) {
        var drinkArrays = drinks.filter(x => x.name === mname[i])[0]
        var drinkArrayQty = drinks.filter(x => x.name === mname[i]).length
        console.log(drinkArrays, 'DRINK RAW ARRAY AFTER FILTER')

        //NEED TO FIX LOGIC FOR PUSH

        if (drinkArrays) {
          multipleOrdersDrink.push({
            ...multipleOrdersDrink.entry,
            entry: { itemName: mname[i], data: drinkArrays, qty: drinkArrayQty }
  
          })
        }

       

      }

      if (multipleOrdersDrink.length > 0) {
        var multiDrink = multipleOrdersDrink.map(x => x.entry)
        var multiDrinkData = multiDrink.map(x => x.data)
      }
      console.log('array drink:',multipleOrdersDrink)
      console.log('data:',multiDrink)

    }


    if (multiFood){

      var foodItems = multiFood.map((item,i) => {
        console.log(item, 'CHECKHERE')
        return (
  
          <div style={{  borderBottom:"1px solid #424242 !important" }}>
            <Link
              tag={RouterNavLink}
              to={{
                pathname: '/item',
                state: { single: item.data, global: context.init }
              }}
              exact
              activeClassName="router-picked"
            >
              <div style={{  borderBottom:"1px solid #424242" }} className="item-container-min force-minheight noborder row-dir">
                <div className="item-img-container col2">
                  <img className="item-img" src={item.data.img_url} />
                </div>
  
                <div className="text-mid col6">
                  <p className="item-title">{item.itemName}</p>
                  <p style={{fontSize:"11px"}} className="item-desc">
                    {item.qty === 1 ? item.data.comms : ''}
                  </p>
                  <div className="counter-row">
                    <p>Quantity: {item.qty}</p>

                  </div>
                </div>
  
                <div className="last-col col2">
                  <p className="item-price">RM{item.data.price*item.qty}</p>
                </div>
              </div>
            </Link>
            <div className="del-row"><button className="rem-btn" onClick={() => cartDel({items:from.data,toRem:item.itemName}).then(res => from.setNewCart(res))}> Remove 1 Item</button></div>

            {item.qty > 1 ? dataArray.filter(x => x.name === item.itemName).map(y => {
              return(
              <div className="item-container-min force-minheight noborder row-dir">
                <div className="text-mid custom-row col6">
                  <p style={{fontSize:"11px"}} className="item-title">
                  {i++ +1}. {y.name}
                  </p>
                  <p style={{fontSize:"11px"}} className="item-desc-min">
                  {y.comms}
                  </p>
                </div>
  
                <div className="last-col col2">
                  <p style={{fontSize:"11px"}} className="item-price">RM{y.price}</p>
                </div>
              </div>
              )
            }):''}
            
          </div>
  
        )
  
      })
    }



    if (multiDrink){

      var drinkItems = multiDrink.map((item,i) => {
        return (
  
          <div>
            <Link
              tag={RouterNavLink}
              to={{
                pathname: '/item',
                state: { single: item.data, global: context.init }
              }}
              exact
              activeClassName="router-picked"
            >
              <div className="item-container-min force-minheight noborder row-dir">
                <div className="item-img-container col2">
                  <img className="item-img" src={item.data.img_url} />
                </div>
  
                <div className="text-mid col6">
                  <p className="item-title">{item.itemName}</p>
                  <p style={{fontSize:"11px"}} className="item-desc">
                    {item.qty === 1 ? item.data.comms : ''}
                  </p>
                  <div className="counter-row">
                    <p>Quantity: {item.qty}</p>
                  </div>
                </div>
  
                <div className="last-col col2">
                  <p className="item-price">RM{item.data.price*item.qty}</p>
                </div>
              </div>
            </Link>
            {item.qty > 1 ? dataArray.filter(x => x.name === item.itemName).map(y => {
              return(
              <div className="item-container-min force-minheight noborder row-dir">
                <div className="text-mid custom-row col6">
                  <p style={{fontSize:"11px"}} className="item-title">
                  {i++ +1}. {y.name}
                  </p>
                  <p style={{fontSize:"11px"}} className="item-desc-min">
                   {y.comms}
                  </p>
                </div>
  
                <div className="last-col col2">
                  <p style={{fontSize:"11px"}} className="item-price">RM{y.price}</p>
                </div>
              </div>
              )
            }):''}
            
          </div>
  
        )
  
      })
    }



    var renderItems = (<>
    {foodItems ? <>
      <h6 className="cat-divider">Food Items</h6>
      {foodItems}
    </> : ''}
    {drinkItems ? <>
      <h6 className="cat-divider">Drink Items</h6>
      {drinkItems}
    </> : ''}
    </>)
  }




  return (
    <div className="item-list">
      {renderItems}
    </div>
  );
};

export default MainOrder; 

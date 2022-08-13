import React, { Fragment, useState, useEffect } from "react";
import { Router, Route, Switch, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Loading from "./components/Loading";
import NavBar from "./components/NavBar";
import Landing from "./views/Landing";
import Menu from "./views/Menu";
import Cashier from "./views/Cashier";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import NavBarInt from "./components/NavBarInternal";
import { globalFetch } from "./utils/fetch";
import Home from "./views/Home";
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore'
import Noti from "./components/Noti"
import noti from "./assets/bell.mp3"
import useSound from "use-sound"
import "./App.css";
import initFontAwesome from "./utils/initFontAwesome";
import SingleOrder from "./views/SingleOrder";
import OrdersCart from "./views/OrdersCart"
import Thanks from "./views/Thanks"
const qs = require('qs')

initFontAwesome();
const App = () => {
  const sample = [ { "id": "9qO1Wmcdur3a7UQGoeE8", "chefrec": false, "img_url": "https://img.freepik.com/free-photo/homemade-tasty-bread-with-garlic-cheese-herbs-kitchen-table_1150-47119.jpg?t=st=1658374495~exp=1658375095~hmac=fcd1f1e1d53cf708cec0cf1f21ab9a4072b6eaa604c82f3f71769b59c45b7910&w=740", "desc": "Toasty, buttery, herby, covered in a dusting of salty parmesan cheese, piping hot and fresh out of the oven", "avail": true, "name": "Garlic Bread", "category": "Appetizer", "price": 20 } ]
  const [mainState, setMainState] = useState([]);
  const [hide, setHide] = useState(false);
  const [table, setTable] = useState(0)
  const [cart, setCart] = useState([]);
 
  console.log(table,cart,'tablecheck')

  useEffect(() => {
    globalFetch().then(res => setMainState(res))

  },[]);

  return (
    <Router history={history}>
      <div id="app" className="">
        <Container id="container" className="">
          <Switch>
          <Route path="/item" render={(prop) => <SingleOrder setCart={setCart} prop={cart} tableData={table} {...prop} />} />
          <Route path="/cart" render={(prop) => <OrdersCart setCart={setCart} data ={mainState} tableData={table} setTable={setTable} prop={cart} {...prop} />} />
            <Route path="/menu" render={(prop) => <Menu tableData={table} prop={mainState} {...prop} />} />
            <Route path="/home" render={(prop) => <Home tableData={table} setTable={setTable} prop={mainState} {...prop} />} />
            <Route path="/" exact render={(prop) => <Landing setHide={setHide} setTable={setTable} prop={mainState} {...prop} />} />
            <Route path="/thanks" exact render={(prop) => <Thanks data ={mainState} cart={cart} setHide={setHide} setTable={setTable} prop={mainState} tableData={table} {...prop} />} />
          </Switch>
        </Container>
      <NavBarInt  data={cart} prop={mainState} />
      </div>
    </Router>
  );
};

export default App;

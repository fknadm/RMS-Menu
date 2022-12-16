import React, { Fragment, useState, useEffect } from "react";
import { Router, Route, Switch, useLocation, useHistory } from "react-router-dom";
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
import { globalFetch, ordersFetch, bannerFetch } from "./utils/fetch";
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
import CheckOrder from "./views/CheckOrder";
import PreMenu from "./views/PreMenu";
const qs = require('qs')

firebase.initializeApp({
  apiKey: "AIzaSyDsvfUROgM0PD0maGPEY55N1MdQ-24CqyU",
  authDomain: "rms-deployment1.firebaseapp.com",
  projectId: "rms-deployment1",
  storageBucket: "rms-deployment1.appspot.com",
  messagingSenderId: "480608866435",
  appId: "1:480608866435:web:c93a1240826a1ffdcc4bb6",
  measurementId: "G-KHNN9NEN8F"
});

const firestore = firebase.firestore()

const messagesRef = firestore.collection('orders');
const query = messagesRef.orderBy('submitted')

initFontAwesome();

const App = () => {
  const [mainState, setMainState] = useState([]);
  const [socketState,setSocket] = useState([])
  const [hide, setHide] = useState(false);
  const [table, setTable] = useState(0)
  const [cart, setCart] = useState([]);
  const [forceHide, setForce] = useState(false)
  const [orders, setOrders] = useState([])
  const [myOrder, setMyorder] = useState([])
  const [loadlist] = useCollectionData(query, { idField: 'id' });
  const [banner, setBanner] = useState([])

  useEffect(() => {

    globalFetch().then(res => setMainState(res))
    bannerFetch().then(res => setBanner(res))


    if (loadlist) {
      console.log('succ')
      if (table > 0) {
        const pending = loadlist.filter(x => {return x.status === 'pending' && x.table_no === table})
        setMyorder(pending)
       }
    }

    if (!loadlist) {
      console.log('fail')
    }

  },[table,loadlist]);

  return (
    <Router history={history}>
      <div id="app" className="">
        <Container id="container" className="" style={{marginBottom:'50%'}}>
          <Switch>
          <Route path="/item" render={(prop) => <SingleOrder setForce={setForce} setCart={setCart} prop={cart} tableData={table} {...prop} />} />
          <Route path="/cart" render={(prop) => <OrdersCart setOrders={setOrders} myOrder={myOrder} setForce={setForce} setCart={setCart} data ={mainState} tableData={table} setTable={setTable} prop={cart} {...prop} />} />
            <Route path="/menu" render={(prop) => <Menu myOrder={myOrder} setForce={setForce} tableData={table} prop={mainState} {...prop} />} />
            <Route path="/home" render={(prop) => <Home banner={banner} myOrder={myOrder} setForce={setForce} tableData={table} setMyorder={setMyorder} setTable={setTable} prop={mainState} {...prop} />} />
            <Route path="/" exact render={(prop) => <Landing setForce={setForce} setHide={setHide} setTable={setTable} prop={mainState} {...prop} />} />
            <Route path="/thanks" exact render={(prop) => <Thanks setMyorder={setMyorder} setOrders={setOrders} forceHide={forceHide} data={mainState} setForce={setForce} setCart={setCart} cart={cart} setHide={setHide} setTable={setTable} prop={mainState} tableData={table} {...prop} />} />
            <Route path="/check" exact render={(prop) => <CheckOrder myOrder={myOrder} forceHide={forceHide} data={mainState} setForce={setForce} setCart={setCart} cart={cart} setHide={setHide} setTable={setTable} prop={mainState} tableData={table} {...prop} />} />
            <Route path="/premenu" exact render={(prop) => <PreMenu setForce={setForce} setHide={setHide} setTable={setTable} prop={mainState} {...prop} />} />
          </Switch>
        </Container>
   {forceHide ? '' : <NavBarInt  data={cart} prop={mainState} /> }
      </div>
    </Router>
  );
};

export default App;

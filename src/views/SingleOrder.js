import React, { useState, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newlogo from "../assets/fblog.png"
import "../App.css"
import Moment from 'react-moment';
import moment from 'moment';
import defimg from '../assets/def_img.png'
import { useHistory } from 'react-router-dom';
import PopSec from "../components/PopularSection";
import { Input } from 'reactstrap'
import { cartAdd } from "../utils/cartHandler"
import ModalConfirm from "../components/ModalConfrim";

import fallback from "../assets/noimg.jpg"

const SingleOrder = (from) => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [cFood, setcFood] = useState(false)
  const [popVis, setPop] = useState(false)
  const [comms, setComms] = useState([])
  const [ice, setIce] = useState('ice')
  const [view,setView] = useState(false)
  const [thisPic,setThisPic] = useState([])

  const data = from.location.state.single
  const gdata = from.location.state.global

  useEffect(() => {
    const containers = document.getElementById('container').style
    window.scrollTo(0, 0)

    containers.paddingRight = '0px'
    containers.paddingLeft = '0px'

    from.setForce(false)
  });

  const conData = {
    main: 'Pop',
    title: 'Add Ons',
    focus: 'Appetizer'
  }

  const appData = {
    main: 'Pop',
    title: 'Add Ons',
    focus: 'Appetizer'
  }

  const add = (s) => {
    cartAdd(s).then(res => { showPop(); from.setCart(res) })
  }

  const toggleView = (x) => {
    setView(prevView => !prevView)
    if (x.length > 0) {
      setThisPic(x)
    }

    else {
      setThisPic([])
    }
  }

  const showPop = () => {
    if (popVis) {
      setPop(false)
    }
    if (!popVis) {
      setPop(true)
    }
  }

  const handleChange = (e) => {
    setComms(e.target.value)
  }

  const handleAdd = (x) => {

    if (ice === 'ice') {
      setIce(x)
    }

    else if (ice === 'hot') {
      setIce('hot')

    }



  }

  console.log(ice)


  console.log(comms)
  console.log(data.img_url)
  return (
    <>
      {popVis ? <ModalConfirm view={'cfm'} setPop={setPop} /> : ''}
      {view ? <ModalConfirm url={thisPic} view={'pic'}  setView={setView} /> : ''}
      
      <div className="item-full-single">
        <FontAwesomeIcon size="2x" className="chev-back-white space-right absolute" onClick={() => history.goBack()} icon='chevron-left' />
        <div onClick={()=>toggleView(data.img_url)} style={{ background: `url(${data.img_url}),url(${fallback})` }} className="single-img-holder">
          {/* <img className="solo-img" src={data.img_url} /> */}

        </div>
        <div className="desc-card">
          <p className="slidebar" />
          <div className="last-col-single">
            <p className="item-price-solo">RM{data.price}</p>
            {data.chefrec ? <FontAwesomeIcon className="star" icon="star" /> : <p></p>}
          </div>
          <div className="sec-col-single row-dir">
            <p className="solo-title">{data.name}</p>
       
            {/* <div className="counter-row">
            <FontAwesomeIcon className="addIcon" icon="minus-circle" />
            <p style={{padding:'10px'}}>0</p>
            <FontAwesomeIcon className="addIcon" icon="plus-circle" />

          </div> */}
          </div>
          <div className="desc-row">
            <div className="desc-left">
            <p>{data.desc}</p>
            </div>
            {data.category === 'Drinks' && data.options && data.options !== 'none' ? <div className="toggRow">   

                <select value={ice} onChange={(e) => setIce(e.target.value)}>
                  {data.options.map(x => {
                    return(
                      <option value={x}>{x}</option>
                    )
                  })}
                </select>
            </div>
              : ''}
          </div>
          {/*{data.category !== 'Appetizer' ? <PopSec context={conData} data={gdata} /> : data.category === 'Appetizer' ? <PopSec context={appData} data={gdata} />  : ''}*/}
          <PopSec context={appData} data={gdata} />
          <div className="btn-rows">
            <Input onChange={e => handleChange(e)} className="comment-box" type="text" placeholder="Comments" />
            {data.category === 'Drinks' ? <button onClick={() => { add({ newItem: data, currentCart: from.prop, comments: comms + ' ' + ice }) }} className="addCart">Add to Cart</button> :             <button onClick={() => { add({ newItem: data, currentCart: from.prop, comments: comms }) }} className="addCart">Add to Cart</button>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOrder; 

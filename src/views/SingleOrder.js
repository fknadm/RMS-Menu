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

const SingleOrder = (from) => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const [cFood, setcFood] = useState(false)
  const [popVis, setPop] = useState(false)
  const [comms, setComms] = useState([])
  const [ice, setIce] = useState('ice')

  const data = from.location.state.single
  const gdata = from.location.state.global

  useEffect(() => {
    const containers = document.getElementById('container').style

    containers.paddingRight = '0px'
    containers.paddingLeft = '0px'
  });

  const conData = {
    title: 'Add Ons',
    focus: 'Appetizer'
  }

  const add = (s) => {
    cartAdd(s).then(res => { showPop(); from.setCart(res) })
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
      setIce('ice')

    }



  }

  console.log(ice)


  console.log(comms)

  return (
    <>
      {popVis ? <ModalConfirm setPop={setPop} /> : ''}
      <div className="item-full-single">
        <FontAwesomeIcon size="2x" className="chev-back-white space-right absolute" onClick={() => history.goBack()} icon='chevron-left' />
        <div style={{ background: `url(${data.img_url})` }} className="single-img-holder">
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
            {data.category === 'Drinks' ? <div className="toggRow">
              <p>Ice</p>
            
              <label className="switch">
                <Input type="checkbox" onClick={() => handleAdd('hot')}></Input>
                <span className="slider round"></span>
              </label>

              <p>Hot</p>
            </div>
              : ''}
          </div>
          {data.category !== 'Appetizer' ? <PopSec context={conData} data={gdata} /> : ''}

          <div className="btn-rows">
            <Input onChange={e => handleChange(e)} className="comment-box" type="text" placeholder="Comments" />
            <button onClick={() => { add({ newItem: data, currentCart: from.prop, comments: comms + ' ' + ice }) }} className="addCart">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleOrder; 

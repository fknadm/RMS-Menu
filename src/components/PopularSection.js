import React,{ Fragment, useState, useEffect }from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { Input } from "reactstrap"
import defimg from "../assets/def_img.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import fallback from "../assets/noimg.jpg"

// const history= useHistory();
const PopSec = (from) => {

  const [menuState,setMenu] = useState([])

  useEffect(() => {
    if (from.context.main === 'Home') {
      var toSet = from.data.filter(x => x.chefrec && x.avail)
          // .slice(0,2)
      setMenu(toSet)
    }

    if (from.context.main === 'Pop') {
      var toSet = from.data.filter(x => x.category === 'addOns' && x.avail)
      setMenu(toSet)
    }

  
    else if (!from.context.main) {
      var toSet = from.data.filter(x => x.category === from.context.focus && x.name === 'Garlic Bread' && x.avail)
     setMenu(toSet)
    }

  }, [from.data]);



  return (
    <>     
    <h5 style={from.context.title === 'Add Ons' ? {} : {paddingLeft:'20px'}}>{from.context.title}</h5>
      <div id="space" style={from.context.main === 'Home' ? { marginBottom:"150px" } : {}} className="hero-bar col-dir">
        <div id={from.context.main === 'Home' ? 'wrap' : 'scroller'} className="row-2-grid">
        {menuState.map(item => {
          return (
            <Link
            style={{    width: '50%'}}
            tag={RouterNavLink}
            to={{
              pathname: '/item',
              state: { single: item, global: from.data }
            }}
            exact
            activeClassName="router-picked"
          >
            <div className="card-promo-row">
              <div className="promo-box-pop row-dir">
                <div className="pop-box-card">
                <div style={{ background: `url(${item.img_url}),url(${fallback})` }} className="img-container unselected-item cover">
                  <img width={70} src={item.img_url,fallback} />
                </div>
                  {/* <img className="popimg" style={from.context.focus === 'Appetizer' ? { width: "50%" } : {}} src={item.img_url} /> */}
                  <p className="foodname">{item.name}</p>
                  <div className="price-row">
                    <p className="price">RM{item.price}</p>
                    <FontAwesomeIcon className="addIcon" icon="plus-circle" />
                  </div>
                </div>
               
              </div>
            </div>
            </Link>
          )
        })}
        </div>
     

      </div>
    </>
  )

};

export default PopSec;

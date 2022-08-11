import React from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { Input } from "reactstrap"
import defimg from "../assets/def_img.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink as RouterNavLink, Link } from "react-router-dom";


// const history= useHistory();
const PopSec = (from) => {
  console.log(from, 'here')

  const loadList = from.data.filter(x => x.category === from.context.focus).slice(0,2)
  console.log(loadList)

  return (
    <>     
    <h5 style={from.context.title === 'Add Ons' ? {} : {paddingLeft:'20px'}}>{from.context.title}</h5>
      <div style={from.context.title === 'Popular' ? { height: "350px" } : {}} className="hero-bar col-dir">
        <div className="row-2-grid">
        {loadList.map(item => {
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
                <div style={{background:`url(${item.img_url})`}} className="img-container unselected-item cover">
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

import React from "react";
import "../App.css"
import { useHistory } from 'react-router-dom';
import { Input } from "reactstrap"
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import defimg from "../assets/def_img.png"
import dspag from "../assets/3dspag.webp"
import drink from "../assets/drink.jpg"
import appe from "../assets/appe.webp"

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

// const history= useHistory();
const FoodCarousell = (from) => {
  console.log(from)

  return (
    <div className="hero-bar col-dir">
      <div className="carousel-items row-dir">
      <Link
              tag={RouterNavLink}
              to={{
                pathname:'/menu',
                state:{context:'All Items'}
              }}
              exact
              activeClassName="router-picked"
            >
        <div className="carou-tile col-dir">
          <div className="img-container selected-item">
            <img className="carou-icon" src={defimg} />
          </div>
          <p className="carou-title">All</p>
        </div>
        </Link>
        <Link
              tag={RouterNavLink}
              to={{
                pathname:'/menu',
                state:{context:'Appetizer'}
              }}
              exact
              activeClassName="router-picked"
            >
        <div className="carou-tile">
          <div style={{background:`url(${appe})`}}className="img-container unselected-item cover">
          </div>
          <p className="carou-title">Appetizer</p>
        </div>
        </Link>
        <Link
              tag={RouterNavLink}
              to={{
                pathname:'/menu',
                state:{context:'Pasta'}
              }}
              exact
              activeClassName="router-picked"
            >
        <div className="carou-tile">
        <div style={{background:`url(${dspag})`}}className="img-container unselected-item cover">
            {/* <img className="carou-icon" src={defimg} /> */}
          </div>
          <p className="carou-title">Pasta</p>
        </div>
        </Link>
        <Link
              tag={RouterNavLink}
              to={{
                pathname:'/menu',
                state:{context:'Drinks'}
              }}
              exact
              activeClassName="router-picked"
            >
        <div className="carou-tile">
        <div style={{background:`url(${drink})`}}className="img-container unselected-item cover">
          </div>
          <p className="carou-title">Beverages</p>
        </div>
        </Link>
        <div className="carou-tile">
          <div className="img-container unselected-item">
            <img className="carou-icon" src={defimg} />
          </div>
          <p className="carou-title">Appetizer</p>
        </div>
      </div>
    </div>
  )

};

export default FoodCarousell;

import React from "react";
import "../App.css"
import { useHistory } from 'react-router-dom';
import { Input } from "reactstrap"
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import defimg from "../assets/def_img.png"
import dspag from "../assets/3dspag.png"
import drink from "../assets/drink.jpg"
import appe from "../assets/appe.png"

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
    <div style={
      { zIndex: '0' }
    } className="hero-bar col-dir">
      <div className="carousel-items row-dir">
        <Link
          tag={RouterNavLink}
          to={{
            pathname: '/menu',
            state: { context: 'All Items' }
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
            pathname: '/menu',
            state: { context: 'Appetizer' }
          }}
          exact
          activeClassName="router-picked"
        >
          <div className="carou-tile">
            <div style={{ background: `url(${appe})` }} className="img-container unselected-item cover">
            </div>
            <p className="carou-title">Appetizer</p>
          </div>
        </Link>
        <Link
          tag={RouterNavLink}
          to={{
            pathname: '/menu',
            state: { context: 'Mains' }
          }}
          exact
          activeClassName="router-picked"
        >
          <div className="carou-tile">
            <div style={{ background: `url(https://res.cloudinary.com/xero-prime/image/upload/v1660211624/EXP-02_ytroiq.jpg)` }} className="img-container unselected-item cover">
            </div>
            <p className="carou-title">Mains</p>
          </div>
        </Link>
        <Link
          tag={RouterNavLink}
          to={{
            pathname: '/menu',
            state: { context: 'LunchSet' }
          }}
          exact
          activeClassName="router-picked"
        >
          <div className="carou-tile">
            <div style={{
              background: `url(        https://res.cloudinary.com/xero-prime/image/upload/v1666271168/photo_6215319059365475375_y_jdfk1e.jpg
)`}} className="img-container unselected-item cover">
            </div>
            <p className="carou-title">Lunch Set</p>
          </div>
        </Link>
        <Link
          tag={RouterNavLink}
          to={{
            pathname: '/menu',
            state: { context: 'Grill' }
          }}
          exact
          activeClassName="router-picked"
        >
          <div className="carou-tile">
            <div style={{ background: `url(https://res.cloudinary.com/xero-prime/image/upload/v1660211641/EXP-08_wrujdb.jpg)` }} className="img-container unselected-item cover">
            </div>
            <p className="carou-title">Grill</p>
          </div>
        </Link>
        <Link
          tag={RouterNavLink}
          to={{
            pathname: '/menu',
            state: { context: 'Pasta' }
          }}
          exact
          activeClassName="router-picked"
        >
          <div className="carou-tile">
            <div style={{ background: `url(${dspag})` }} className="img-container unselected-item cover">
              {/* <img className="carou-icon" src={defimg} /> */}
            </div>
            <p className="carou-title">Pasta</p>
          </div>
        </Link>
        <Link
          tag={RouterNavLink}
          to={{
            pathname: '/menu',
            state: { context: 'Drinks' }
          }}
          exact
          activeClassName="router-picked"
        >
          <div className="carou-tile">
            <div style={{ background: `url(${drink})` }} className="img-container unselected-item cover">
            </div>
            <p className="carou-title">Beverages</p>
          </div>
        </Link>
        <Link
          tag={RouterNavLink}
          to={{
            pathname: '/menu',
            state: { context: 'Sandwiches' }
          }}
          exact
          activeClassName="router-picked"
        >
          <div className="carou-tile">
            <div style={{ background: 'url(https://images.food52.com/hJVqzsk-IVC5ClmsvJXuCU-Dd7A=/1200x1200/52a45c81-a0c3-4d2e-953c-51baed112e91--cali_h.jpg)' }} className="img-container unselected-item cover">
            </div>
            <p className="carou-title">Sandwiches</p>
          </div>
        </Link>
      </div>
    </div>
  )

};

export default FoodCarousell;

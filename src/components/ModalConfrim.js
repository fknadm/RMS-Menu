import React, { useState, useEffect } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import newlogo from "../assets/fblog.png"
import "../App.css"
import { singlePut, remOrder } from "../utils/fetch";
import Loading from "./Loading";

import fnplate from "../assets/spag.png"

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

import { useAuth0 } from "@auth0/auth0-react";
import fallback from "../assets/noimg.jpg";

const ModalConfirm = (from) => {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState([]);
  const [isLoading, setLoading] = useState(false)


  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = 'hidden'
  },[]);

  console.log(from.data, 'here')

  return (
      <>
      {from.view === 'pic' ?
          <>      
          <div onClick={() => from.setView(false)} className="modalConfirm">
          </div>
          <div className="modalInner"> 
              <div>
                <img onError={({currentTarget}) => {currentTarget.onerror = null; currentTarget.src = fallback}} style={{maxHeight:'500px',maxWidth:'330px'}} className="" src={from.url} />
              </div>
              <div className="modalButtons" style={{width:'330px'}}>

<button onClick={() => {document.body.style.overflow = 'auto';from.setView(false)}} className="btn-modal ready">Close</button>
</div>
           
          </div>
          </>
      : 
      <>      
      <div onClick={() => from.setPop(false)} className="modalConfirm">
      </div>
      <div className="modalInner">
        <div className="modalTotal">
          <div>
            <img className="icon_img" src={fnplate} />
          </div>
          <h4>Added To Order</h4>

        </div>
        <div className="modalButtons">
          <button onClick={() => {document.body.style.overflow = 'auto';from.setPop(false)}} className="btn-modal ready">Confirm</button>
        </div>
      </div>
      </>
      }

      </>
      
      

  );
};

export default ModalConfirm; 
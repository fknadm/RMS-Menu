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
      
      

  );
};

export default ModalConfirm; 
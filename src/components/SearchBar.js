import React from "react";
import "../App.css"
import { Container, Row, Col } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { Input } from "reactstrap"
import defimg from "../assets/def_img.png"
import { useState } from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const history= useHistory();
const SearchBar = (from) => {
  const [search,setSearch] = useState('search')

  console.log(from)

  const list = from.data

  const handleSearch = (ev) => {
    setSearch(ev.target.value)
  }
  console.log(search)
  var newList = []

  const loadSug = () => {
    for (let i=0; i < list.length; i++) {
      

      if (search.length > 0) {
        console.log(list[i].name.toUpperCase().indexOf(search.toUpperCase()),'context test')
        
        if (list[i].name.toUpperCase().indexOf(search.toUpperCase()) > -1 && list[i].avail) {
          newList.push(list[i])
        } 
      }


    }
  }

  return (
    <div className="hero-bar col-dir">
      <div className="search-container">
        <Input onChange={(e) => handleSearch(e)} placeholder="Search" style={{ width: '100%' }} />
        <div className="suggestions">
        {loadSug()}
        {newList.map(x =>
        <Link
        style={{backgroundColor:'#f7f7f7',borderBottom:'1px solid #ffffff'}}
            tag={RouterNavLink}
            to={{
              pathname: '/item',
              state: { single: x, global: list }
            }}
            exact
            activeClassName="router-picked"
          > 
             <div className="item-container-n row-dir">
              <div className="group-left">

              <div className="text-mid">
                <p className="item-title">{x.name}</p>
                <p className="item-desc">{x.desc}</p>
  
              </div>
              </div>
            

              <div className="last-col">
                <p className="item-price">RM{x.price}</p>
              </div>
            </div>
            </Link>
        
        )
}
        </div>
      </div>
    </div>
  )

};

export default SearchBar;

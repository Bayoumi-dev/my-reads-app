import React from "react";
import PropTypes from 'prop-types';
import { ListIcon, LogoIcon } from "../icons";
import { Link } from "react-router-dom";


const Header = (props)=> {
  
    return (
      <header>
      <div className="container">
        <div className="list-icon">
          <button onClick={props.handleSidebarList}><ListIcon /></button>
        </div>
        <Link to='/'>
          <div className="logo"><LogoIcon /><div className="logo-name">My Reads</div></div>
        </Link>
      </div>
    </header>
    );
  
}


Header.propTypes = {
  handleSidebarList: PropTypes.func.isRequired,
};


export default Header;


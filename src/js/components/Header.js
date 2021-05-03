import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
       <header>
 
    <nav className="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar">
      <div className="container-fluid">
 
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        
 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
          aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
 
        <div className="collapse navbar-collapse" id="basicExampleNav">
           <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/#" className="nav-link navbar-link-2 waves-effect">
                <span className="badge badge-pill red">1</span>
                <i className="fas fa-shopping-cart pl-0"></i>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/#" className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="true">
                <i className="united kingdom flag m-0"></i>
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/#" className="dropdown-item" href="#!">English </Link>
                <Link to="/#" className="dropdown-item" href="#!">Spanish  </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link waves-effect"> 
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link waves-effect">  
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link waves-effect"> 
                Sign in
              </Link>
            </li>
            <li className="nav-item pl-2 mb-2 mb-md-0">
              <Link to="/#"  type="button"
                className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign
                up</Link>
            </li>
          </ul>

        </div> 
      </div>
    </nav> 

    


  </header>
      
    );
  }
}

export default Header;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
       <footer className="page-footer font-small elegant-color">

    <div className="color-primary">
      <div className="container">
 
        <div className="row py-4 d-flex align-items-center">
 
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 className="mb-0">Get connected with us on social networks!</h6>
          </div> 
 
          <div className="col-md-6 col-lg-7 text-center text-md-right">
 
            <Link className="fb-ic">
              <i className="fab fa-facebook-f white-text mr-4"> </i>
            </Link> 
            <Link className="tw-ic">
              <i className="fab fa-twitter white-text mr-4"> </i>
            </Link> 
            <Link className="gplus-ic">
              <i className="fab fa-google-plus-g white-text mr-4"> </i>
            </Link> 
            <Link className="li-ic">
              <i className="fab fa-linkedin-in white-text mr-4"> </i>
            </Link> 
            <Link className="ins-ic">
              <i className="fab fa-instagram white-text"> </i>
            </Link>

          </div> 

        </div> 

      </div>
    </div>
  </footer>
      
    );
  }
}

export default Footer;
import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import { connect } from "react-redux";
import { getData } from "../actions/index";

class Main extends Component { 

  componentDidMount() {
    this.props.getData();
  }


  render() {
    return (
       <main>
    <div className="container">

      

      <hr/>
 
      <div className="text-center">

        <h4 className="text-center my-5"><strong>All tests</strong></h4>
 
        <div className="row">

        {this.props.tests.map(el => (
          <div className="col-md-6 col-lg-3 mb-5" key={el.testId}>
 
            <div className="">

              <div className="view zoom overlay z-depth-2 rounded">
                <img className="img-fluid w-100"
                  src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd58batch1-23181-ploy-01a.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3a1667a26008c954c795633110b97445" alt="Sample" />
                <Link to={`/test/${el.testName}/${el.testPrice}/${el.subscriptionAvailable}/${el.biomarkers[0].biomarkerName}`}>
                  <div className="mask">
                    <img  className="img-fluid w-100"
                      src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd58batch1-23181-ploy-01a.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3a1667a26008c954c795633110b97445" alt="Sample" />
                    <div className="mask rgba-black-slight"></div>
                  </div>
                </Link>
              </div>

              <div className="pt-4">

                <h5>{el.testName}</h5>
                <p><span><strong>£{el.testPrice}</strong></span></p>

              </div>

            </div> 

          </div>   
 
        ))}           

        </div> 

      </div> 

    </div>
  </main>
      
    );
  }
}




function mapStateToProps(state) {
  return {
    tests: state.remoteTests
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Main);



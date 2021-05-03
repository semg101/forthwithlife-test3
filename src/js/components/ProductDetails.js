import React, { Component } from 'react'; 


class ProductDetails extends Component {
 

  render() {
    return ( 
 
  <main>
    <div className="container">

      <section className="mb-5">

        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">

            <div id="mdb-lightbox-ui"></div>

            <div className="mdb-lightbox">

              <div className="row product-gallery mx-1">

                <div className="col-12 mb-0">
                  <figure className="view overlay rounded z-depth-1 main-img add">
                    <a href="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd58batch1-23181-ploy-01a.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3a1667a26008c954c795633110b97445"
                      data-size="710x823" target="_blank"  rel="noreferrer" >
                      <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd58batch1-23181-ploy-01a.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=3a1667a26008c954c795633110b97445" alt="Sample"
                        className="img-fluid z-depth-1 topp" />
                    </a>
                  </figure>
                  
                </div>
                
              </div>

            </div>

          </div>
          <div className="col-md-6">

            <h5>{this.props.testName}</h5>
            <p className="mb-2 text-muted text-uppercase small">{this.props.testName}</p>
            <ul className="rating">
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-primary"></i>
              </li>
            </ul>
            <p><span className="mr-1"><strong>£{this.props.testPrice}</strong></span></p>
            <p className="pt-1">Check if you are amongst 50% of the population who are vitamin D deficient. This vitamin plays a vital role in wellbeing including, strong bones, immunity and energy.</p>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th className="pl-0 w-25" scope="row"><strong>Biomarker Name</strong></th>
                    <td>{this.props.biomarkerName}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row"><strong>Subscription Available</strong></th>
                    <td>{this.props.subscriptionAvailable}</td>
                  </tr> 
                </tbody>
              </table>
            </div>
            <hr/>
            <div className="table-responsive mb-2">
              <table className="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td className="pl-0 pb-0 w-25">Quantity</td> 
                  </tr>
                  <tr>
                    <td className="pl-0">
                      <div className="def-number-input number-input safari_only mb-0">
                        <button 
                          className="minus"></button>
                        <input className="quantity" min="0" name="quantity" value="1" type="number" />
                        <button 
                          className="plus"></button>
                      </div>
                    </td> 
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">Buy now</button>
            <button type="button" className="btn btn-light btn-md mr-1 mb-2"><i className="fas fa-shopping-cart pr-2"></i>Add to
              cart</button>
          </div>
        </div>

      </section> 
 
       

      <hr/>

    </div>
  </main> 
      
    );
  }
}

export default ProductDetails;
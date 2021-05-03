import {useParams} from 'react-router-dom';
import ProductDetails from './ProductDetails';  

function Test ({tests }) {   
  const {testName, testPrice, subscriptionAvailable, biomarkerName} = useParams();   
  return ( <ProductDetails testName={testName} testPrice={testPrice} subscriptionAvailable={subscriptionAvailable} biomarkerName={biomarkerName}/>
             ); 
};


export default  Test;
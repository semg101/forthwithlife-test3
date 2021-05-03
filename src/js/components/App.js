import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './Home';
import Test from './Test';
import Footer from './Footer';
import Header from './Header';


function App () {
    return (
        
       <BrowserRouter>
         <Header/>
            <div className="App"> 
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/test/:testName/:testPrice/:subscriptionAvailable/:biomarkerName" component={Test}/>
              </Switch>
            </div>
         <Footer/>   
        
       </BrowserRouter>
      
       ); 
}
 

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from '../src/components/Homepage/Homepage';
import Navigation from '../src/components/Navbar/Navbar';
import resume from '../src/components/ResumePage/Resume';
import portfolio from '../src/components/PorfolioPage/Portfolio';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/Portfolio" component={portfolio}/>
             <Route path="/Resume" component={resume}/>
            {/* <Route component={Error}/> */}
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;

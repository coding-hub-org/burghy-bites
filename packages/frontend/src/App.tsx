import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomeSection,VenueSection,LoginSection,RegisterSection,DishSection} from './Sections';
import Navbar from './Sections';
const NotFound: React.FC= () =>{
  return (
    <React.Fragment>
      URL not match
    </React.Fragment>
  )
}
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={HomeSection}/>
          <Route path="/login" component={LoginSection}/>
          <Route path="/register" component={RegisterSection}/>
          <Route path="/venues" component={VenueSection}/>
          <Route path="/dishes/:venue/:dish" component={DishSection}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

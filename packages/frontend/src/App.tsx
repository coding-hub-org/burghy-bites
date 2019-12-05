import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomeSection,VenueSection,LoginSection,RegisterSection,DishSection} from './Sections';
import Navbar from './Sections';
import MapComponent from './Sections/HomeSection/map';
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
        <Switch>
          <Route exact path="/" component={HomeSection}/>
          <Route path="/login" component={LoginSection}/>
          <Route path="/register" component={RegisterSection}/>
          <Route path="/venues/:name" component={VenueSection}/>
          <Route path="/dishes/:venue/:dish" component={DishSection}/>
          <Route path="/map" component={MapComponent}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

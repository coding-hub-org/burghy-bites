import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {HomeSection} from './Sections';
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeSection}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

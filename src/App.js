import React from 'react'
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Postcode from './Postcode'
import Home from './Home'
const fetch = require('node-fetch')

function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch("/code.json")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Router>  
          <Switch>
            <Route exact path="/">
              <Home data={data}/>
            </Route>
            <Route path='/:id' component={Postcode} />
          </Switch>
        </Router>   
      </header>  
    </div>
  );
}

export default App;

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
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles'
import { cyan, brown, deepOrange } from '@material-ui/core/colors'
import Header from './components/Header'
import CssBaseline from "@material-ui/core/CssBaseline";

const fetch = require('node-fetch')

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: cyan[50]
    },
    primary: {
      main: deepOrange[200]
    },
    background: {
      default: brown[50]
    }
  },
});



function App() {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch("/code.json")
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])


  return (    
    <ThemeProvider theme={theme}>        
      <CssBaseline />
      <Router>  
        <Header />
          <Switch>
            <Route exact path="/">
              <Home data={data}/>
            </Route>
            <Route path='/:id' component={Postcode} />
          </Switch>         
      </Router>   
    </ThemeProvider>
  );
}

export default App;

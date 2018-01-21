import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap'
import TopBar from './Components/Rows/TopBar';
import MiddleThird from './Components/Rows/MiddleThird';
import BottomBar from './Components/Rows/BottomBar';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <TopBar/>

        <MiddleThird/>

        <BottomBar/>
      </Grid>
    );
  }
}

export default App;
 
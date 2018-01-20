import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap'
import TopThird from './Components/Rows/TopThird';
import MiddleThird from './Components/Rows/MiddleThird';
import BottomThird from './Components/Rows/BottomThird';

class App extends Component {
  render() {
    return (
      <Grid fluid>
        <TopThird/>

        <MiddleThird/>

        <BottomThird/>
      </Grid>
    );
  }
}

export default App;

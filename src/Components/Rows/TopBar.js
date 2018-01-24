import React, { Component } from 'react';
import { Row, Nav, Navbar, NavItem } from 'react-bootstrap'
import './rows.css'


class TopBar extends Component {
    topBarStyle={
        backgroundColor:'black',
        borderBottom: 0
    }
    logoStyle={
        color: 'white'
    }
    render() {
        return (
  
            <Row className="topBar" >
                <Navbar fixedTop  style={this.topBarStyle}>
                    <Nav>
                        <NavItem>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Row>

        );
    }
}

export default TopBar;

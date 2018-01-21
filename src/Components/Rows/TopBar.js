import React, { Component } from 'react';
import { Row, Nav, Navbar, NavItem } from 'react-bootstrap'
import './rows.css'


class TopBar extends Component {
    topBarStyle={
        backgroundColor:'green'
    }
    logoStyle={
        color: 'white'
    }
    render() {
        return (
  
            <Row fluid className="topBar" >
                <Navbar fixedTop  style={this.topBarStyle}>
                    <Nav>
                        <NavItem>
                            <h1 className="text-center" style={this.logoStyle}> Top Bar!</h1>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Row>

        );
    }
}

export default TopBar;

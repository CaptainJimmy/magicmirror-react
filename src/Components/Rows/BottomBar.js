import React, { Component } from 'react'
import { Row, Nav, Navbar, NavItem } from 'react-bootstrap'
import './rows.css'

class BottomBar extends Component {
    bottomBarStyle={
        backgroundColor:'green'
    }
    logoStyle={
        color: 'white'
    }
    render() {
        return (
            <Row className="bottomBar">
                <Navbar fixedBottom style={this.bottomBarStyle}>
                    <Nav>
                        <NavItem>
                            <h1 className="text-center" style={this.logoStyle}> Bottom Bar!</h1>
                        </NavItem>
                    </Nav>
                </Navbar>
            </Row>
        );
    }
}

export default BottomBar;

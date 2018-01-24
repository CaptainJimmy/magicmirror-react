import React, { Component } from 'react'
import { Row, Nav, Navbar, NavItem } from 'react-bootstrap'
import './rows.css'

class BottomBar extends Component {
    bottomBarStyle={
        backgroundColor:'black',
        borderTop: 0
    }
    logoStyle={
        color: 'white',
        borderTop: 0
    }
    render() {
        return (
            <Row className="bottomBar">
                <Navbar fixedBottom style={this.bottomBarStyle}>
                    <Nav>
                        <NavItem>

                        </NavItem>
                    </Nav>
                </Navbar>
            </Row>
        );
    }
}

export default BottomBar;

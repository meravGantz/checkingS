import React from 'react';
import {Navbar,Nav,NavDropdown,MenuItem} from 'react-bootstrap'
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){


        return (
            <div className="cityNav">
                <Navbar inverse>
                    <Navbar.Brand>
                        <a href="#">City-Bot</a>
                    </Navbar.Brand>
                    <Navbar.Collapse>
                    <Nav className="burger">
                        <div id="basic-nav-dropdown">
                        <NavDropdown eventKey={1} title="Dropdown" id="dropDownTitle">
                            <MenuItem className="menu" eventKey={1.1} >Offline</MenuItem>
                            <MenuItem divider />
                            <MenuItem className="menu" eventKey={1.2}>Operator</MenuItem>
                            <MenuItem divider />
                            <MenuItem className="menu" eventKey={1.3}>Admin</MenuItem>
                        </NavDropdown>
                        </div>

                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        )
    }
}


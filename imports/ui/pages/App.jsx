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
                    <img src="img/logo.png" id="logo"/>
                    <Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Collapse>
                    <Nav>
                        <div id="basic-nav-dropdown">
                            <img src="img/hamburger.png" id="burger"/>
                            <NavDropdown eventKey={1} id="dropDownTitle">
                            <MenuItem className="menu"  eventKey={1.1} >מערכת מידע</MenuItem>
                            <MenuItem divider />
                            <MenuItem className="menu" eventKey={1.2}>עמדת מפעיל</MenuItem>
                            <MenuItem divider />
                            <MenuItem className="menu" eventKey={1.3}>מצב העיר</MenuItem>
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


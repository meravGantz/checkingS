import React from 'react';
import {Link} from 'react-router';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Menu, MenuItem} from 'material-ui/Menu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            menuOpen: false
        }
        this.renderMenu = this.renderMenu.bind(this);
    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    renderMenu(){
        console.log("clicked");
        this.setState({menuOpen: !this.state.menuOpen});
    }
    render(){
        let currentScreen;
        if (this.props.location.pathname == '/operator'){
            currentScreen = "מסך מפעיל";
        }
        if (this.props.location.pathname == '/adminBoard'){
            currentScreen = "מצב העיר";
        }
        if (this.props.location.pathname == '/offlineBoard'){
            currentScreen = "ניתוח מידע";
        }
        console.log("something");
        const style = {
            // Without this, the menu overflows the CodeExample container.

        };
        return (
            <div>
                <AppBar className="overrideAppBack"
                    title="CityBot"
                    style={{color: 'black'}}
                    zDepth={1}
                    onClick={this.renderMenu}
                >
                </AppBar>
                {this.state.menuOpen?
                    <Menu desktop={true} className="text-center overrideTextCenter">
                        <MenuItem className="menuLink" ><Link to={`/operator`} className="linkOverride"> מסך מפעיל</Link> </MenuItem>
                        <MenuItem className="menuLink" ><Link to={`/adminBoard`} className="linkOverride"> מצב העיר</Link></MenuItem>
                        <MenuItem className="menuLink"><Link to={`/offlineBoard`} className="linkOverride"> מערכת מידע</Link></MenuItem>
                    </Menu>
                    :
                    null
                }
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

        //<Navbar inverse id="navBarCss">
        //    <Navbar.Brand>
        //        <img src="img/logo.png" id="logo"/>
        //        </Navbar.Brand  >
        //        <Navbar.Collapse>
        //        <Nav>
        //        <div id="basic-nav-dropdown">
        //        <h3 className="text-center navTitle">{currentScreen}</h3>
        //    <NavDropdown eventKey={1} id="dropDownTitle">
        //        <MenuItem className="menu"  eventKey={1.1}  ><Link to={`/offlineBoard`} className="linkOverride" > מערכת מידע</Link></MenuItem>
        //        <MenuItem divider />
        //        <MenuItem className="menu" eventKey={1.2} ><Link to={`/operator`} className="linkOverride" >עמדת מפעיל</Link></MenuItem>
        //        <MenuItem divider />
        //        <MenuItem className="menu" eventKey={1.3} ><Link to={`/adminBoard`} className="linkOverride" >מצב העיר</Link></MenuItem>
        //        </NavDropdown>
        //        </div>
        //
        //        </Nav>
        //        </Navbar.Collapse>
        //        </Navbar>
App.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
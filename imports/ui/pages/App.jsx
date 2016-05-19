import React from 'react';
import {Navbar} from 'react-bootstrap'
export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Brand>
                        <a href="#">City-Bot</a>
                    </Navbar.Brand>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>

        )
    }
}


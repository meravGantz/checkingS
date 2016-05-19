import React from 'react';
import {Link} from 'react-router';
import Todo from '../components/Todo.jsx';
import {NavigationBar} from '../components/NavigationBar.jsx';
import {Lists} from '../components/ListsComponent.jsx';
import AllListsContainer from '../containers/AllListsContainer.jsx';
export default class App extends React.Component{
    render(){
        let child = this.props.children;
        if (!child){
            child = <AllListsContainer/>
        }
        console.log("Sdf");
        return (
            <div>
                <NavigationBar/>
                <div className="container separator">
                    {child}
                </div>
            </div>
        )
    }
}
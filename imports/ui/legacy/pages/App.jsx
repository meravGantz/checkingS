import React from 'react';

export default class App extends React.Component{
    render(){
        let child = this.props.children;
        console.log("Sdf");
        return (
            <div className="container">
                {child}
            </div>
        )
    }
}
import React from 'react';
export default class ReplyText extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: ""
        };
        this.handleTitle = this.handleTitle.bind(this);
    }
    handleTitle(e){
        this.setState({title: e.target.value})
    }
    render(){
        return (
            <div className="container">
                <textarea className="form-control" type="text" onChange={this.handleTitle} />
                <button className="btn btn-primary">Send</button>
            </div>
        )
    }
}
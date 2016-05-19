import React from 'react';
import ReplyText from './ReplyText.jsx';
export default class msgBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msgText: ""
        };
        this.handleMsg = this.handleMsg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleMsg(e){
        console.log("here");
        this.setState({msgText: e.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.props.communication.userFbId);
        console.log(this.state.msgText);
        Meteor.call('addMsgToCommunication', this.props.communication.userFbId, this.state.msgText, (err,res)=>{
            if (err){
                console.log(err)
            }else{
                console.log(res);
            }
        });
    }
    render(){
        const messages = this.props.communication.messages.map((message)=>{
            console.log('sdf');
            return(
                <div key={Math.random()}>
                    {message.userMsg? <h3>{message.msgContent}</h3> : <p>{message.msgContent}</p>}
                </div>

            )
        });
        return (
            <div className="container">
                <h3>Chat Board </h3>
                {messages}
                <ReplyText textMsg={this.state.msgText} handleText={this.handleMsg} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
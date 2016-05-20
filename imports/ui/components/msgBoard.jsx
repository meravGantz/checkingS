import React from 'react';
import ReplyText from './ReplyText.jsx';
import {MessageBox} from './messageBox.jsx';
export default class msgBoard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msgText: ""
        };
        this.handleMsg = this.handleMsg.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.finishedSession = this.finishedSession.bind(this);
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
        this.setState({msgText: ""});
    }
    finishedSession(){
        Meteor.call('finishedSession', this.props.communication.userFbId, this.props.communication.sessionId, (err, res)=>{
            if (err){
                console.log(err)
            }else{
                console.log(res);
            }
        })
    }
    render(){
        let activeChat;
        let messages;;
        if (this.props.communication && this.props.communication.messages.length > 0){
            activeChat = true;
            messages = this.props.communication.messages.map((message)=>{
                console.log('sdf');
                return(
                    <div key={Math.random()}>
                        {message.userMsg? <MessageBox text={message.msgContent} isUser={true}/> : <MessageBox text={message.msgContent} isUser={false}/>}
                    </div>
                )
            });
        }else{
            activeChat = false;
        }
        return (
            <div className="msgBoard">
                {activeChat?
                    <div className="middleMsg">
                        <div className="scrollbar">
                            {messages}
                        </div>
                        <div className="reply">
                            <ReplyText msgText={this.state.msgText} handleText={this.handleMsg}
                                   handleSubmit={this.handleSubmit} finishedSession={this.finishedSession}/>
                        </div>
                    </div> : <p> No Active Chat.</p>}
            </div>
        )
    }
}
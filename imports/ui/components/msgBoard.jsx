import React from 'react';
import ReplyText from './ReplyText.jsx';
export default class msgBoard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const messages = this.props.communication.messages.map((message)=>{
            return(
                <div>
                    {message.userMsg? <h3>{message.msgContent}</h3> : <p>{message.msgContent}</p>}
                </div>

            )
        });
        return (
            <div className="container">
                <h3>Chat Board </h3>
                {messages}
                <ReplyText />
            </div>
        )
    }
}
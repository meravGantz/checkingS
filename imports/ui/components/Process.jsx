/**
 * Created by jonathan on 19-May-16.
 */

import React from 'react';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import RaisedButton from 'material-ui/RaisedButton';
import Badge from 'material-ui/Badge';

import {red500, yellow500, blue500} from 'material-ui/styles/colors';
export default class Process extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            replyMsg: "",
            replyBool: false
        };
        this.handleFinish = this.handleFinish.bind(this);
        this.handleConversation = this.handleConversation.bind(this);
        this.handleReplyMsg = this.handleReplyMsg.bind(this);
        this.handleReplySubmit = this.handleReplySubmit.bind(this);
    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleReplyMsg(e){
        this.setState({replyMsg: e.target.value})
    }
    handleFinish(){
        console.log('handle finish');
        this.props.handleFinish(this.props.process._id, this.props.process.userIds);
    }
    handleConversation(){
        console.log('handleConversation');
        this.setState({replyBool: true});
    }
    handleReplySubmit(){
        Meteor.call('submitToUsers', this.props.process.userIds, this.state.replyMsg, (err, result)=>{
            if (err){
                console.log(err)
            }else{
                this.setState({replyMsg: "", replyBool: false})
            }
        })
    }
    render(){
        let imgSrc;
        let callText;
        if (this.props.process.processType === "garbage"){
            imgSrc = "/img/garbage.png";
            callText = "זבל ב" + this.props.process.location;
        }
        if (this.props.process.processType === "gardening"){
            imgSrc = "";
            callText = "גננות  ב" + this.props.process.location;
        }
        if (this.props.process.processType === "animal"){
            imgSrc = "";
            callText = "דיווח על בעלי חיים ב "+ this.props.process.location;
        }
        return (
            <div className="row">

                <div className = "proccesRect">

                    <img src={imgSrc} className = "typeImage"/>
                    <div className = "procText">{callText}</div>
                    <img src="/img/finish.png"className = "finishIcon" onClick={this.handleFinish}/>
                    <img src="/img/chat.png" className = "convIcon" onClick={this.handleConversation}/>
                    <Badge className = "counter"
                        badgeContent={this.props.process.userIds.length}
                        primary={true}
                    ></Badge>


                </div>
                {this.state.replyBool?
                    <div className="row textReplyWindow" style={{background:"gray"}}>
                            <textarea style = {{width:450}} className="form-control " onChange={this.handleReplyMsg}/>
                            <button className="btn btn-primary" onClick={this.handleReplySubmit}>Send</button>
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}
Process.PropTypes = {process: React.PropTypes.object};
Process.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
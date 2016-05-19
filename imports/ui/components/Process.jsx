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
            imgSrc = "";
            callText = "קריאות לפינוי זבל התקבלו מרחוב";
        }
        return (
            <div className="row">
                <ListItem
                    leftAvatar={<Avatar icon={imgSrc} />}
                    rightIcon={<ActionInfo />}
                    primaryText={this.props.process.location}
                    secondaryText={this.props.process.counter}
                />
                <RaisedButton
                    label = "סיים טיפול"
                    primary={true}
                    onClick={this.handleFinish}
                />
                <RaisedButton
                    label = "העבר לנציג"
                    primary={true}
                    onClick={this.handleConversation}
                />
                {this.state.replyBool?
                    <div className="row">
                        <div className="col-md-4 col-lg-4">
                            <textarea className="form-control" onChange={this.handleReplyMsg}/>
                            <button className="btn btn-primary" onClick={this.handleReplySubmit}>Send</button>
                        </div>
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
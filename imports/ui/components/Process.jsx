/**
 * Created by jonathan on 19-May-16.
 */

import React from 'react';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import ActionDelete from '../../../node_modules/material-ui/svg-icons/action/delete';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
export default class Process extends React.Component{
    constructor(props){
        super(props);
        this.handleFinish = this.handleFinish.bind(this);
        this.handleConversation = this.handleConversation.bind(this);
    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleFinish(){
        console.log('handle finish');
        this.props.handleFinish(this.props.process._id);
    }

    handleConversation(){
        console.log('handleConversation');
        this.props.handleConversation(this.props.process._id);
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
                <div className="col-md-2 zeroPadding">
                    <img src = {imgSrc}></img>
                    {this.props.process.counter}
                     {callText}
                     {this.props.process.location}

                </div>
                <button onClick={this.handleFinish}> סיים טיפול  </button>
                <button onClick={this.handleFinish}> העבר לנציג </button>
            </div>
        )
    }
}

Process.PropTypes = {process: React.PropTypes.object};
Process.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
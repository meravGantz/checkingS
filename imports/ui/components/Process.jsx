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
        this.handleDelete = this.handleDelete.bind(this);
    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleDelete(){
        this.props.handleDelete(this.props.process._id);
    }
    render(){
        let imgSrc;
        let callText;
        if (this.props.process.proccessType === "garbage"){
            imgSrc = "../pics/garbage.jpg";
            callText = "קריאות לפינוי זבל התקבלו מרחוב";
        }

        return (

            <div className="row">
                <div className="col-md-2 zeroPadding">
                    <img src = {imgSrc}></img>
                    <counter number = {this.props.process.count}/>
                     {callText}
                     {this.props.process.location}

                </div>
                <button> סיים טיפול </button>
                <button> העבר לנציג אנושי </button>
            </div>
        )
    }
}

Proccess.PropTypes = {process: React.PropTypes.object};
Proccess.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};


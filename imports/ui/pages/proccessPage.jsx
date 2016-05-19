/**
 * Created by jonathan on 19-May-16.
 */

import React from 'react';

import Process from '../components/Process.jsx';
import {Processes} from '../../api/processes/processes';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import RaisedButton from 'material-ui/RaisedButton';

export default class ProccessPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listState: "hidden"
        };
        this.handleFinish = this.handleFinish.bind(this);
        this.handleConversation = this.handleConversation.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleFinish(proccesID){
        Meteor.call('deleteProcess', proccesID, (err, result)=>{
            if (err){
                console.log("error")
            }
            console.log("successful deletion")
        });
        //Processes.deleteProcess(proccesID)
    }

    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleConversation(proccesID){

    }
    handleClick(){
        let newState;
        if (this.state.listState === "hidden"){
            newState = "visible"
        }
        else{
            newState = "hidden"
        }

        this.setState({listState: newState})
        console.log(this.state.listState)

    }

    render(){
        const processes = this.props.processes.map((process)=>{
            return (
                <Process key={process._id} process = {process} count = {process.counter}
                         location  = {process.location} type = {process.processType} userIds = {process.userIds}
                         handleFinish={this.handleFinish} handleConversation = {this.handleConversation}/>
            )
        });

        return (
            <div>
                <h1> Open Processes </h1>

                <RaisedButton
                    label = "פתח תהליכים"
                    primary={true}
                    onClick={this.handleClick}
                />
                <div style={{visibility:this.state.listState}}>
                <List>
                    <Subheader inset={true}>Folders</Subheader>
                        {processes}
                </List>
                </div>


            </div>
        )
    }
}
ProccessPage.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
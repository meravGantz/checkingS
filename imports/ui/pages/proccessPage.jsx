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
import Badge from 'material-ui/Badge';

export default class ProccessPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listState: true,
            label: "פתח תהליכים",

        };
        this.handleFinish = this.handleFinish.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.calculateCounter = this.calculateCounter.bind(this);

    }
    calculateCounter(){
        let counter = 0;
        this.props.processes.map((process)=>{
            counter +=process.userIds.length
        })
        return counter;
    }
    handleFinish(processID, userIds) {
        Meteor.call('deleteProcess', processID, userIds, (err, result)=> {
            if (err) {
                console.log("error")
            }
            console.log("successful deletion")
        });

    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleClick(){
        let newLabel;
        if (this.state.listState){
            newLabel = "פתח תהליכים"
        }else{
            newLabel="סגור"
        }
        this.setState({listState: !this.state.listState, label: newLabel});
    }
    render(){
        console.log("sdf");
        let unSortedProcesses = this.props.processes.fetch();
        unSortedProcesses.sort((a,b)=>{
            return (b.userIds.length - a.userIds.length )
        });
        const processes = unSortedProcesses.map((process)=>{
            return (
                <Process key={process._id} process={process} count={process.counter}
                         location={process.location} type={process.processType} userIds={process.userIds}
                         handleFinish={this.handleFinish} />
            )
        });
        return (
            <div className = "totalCount">
                {this.state.listState?

                    <div  className="processList">
                        {processes}
                     </div>
                    :
                    null
                }
            </div>
        )
    }
}
ProccessPage.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
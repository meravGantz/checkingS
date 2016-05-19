/**
 * Created by jonathan on 19-May-16.
 */

import React from 'react';

import Process from '../components/Process.jsx';
import {Processes} from '../../api/processes/processes';
export default class ProccessPage extends React.Component{
    constructor(props){
        super(props);
        this.handleFinish = this.handleFinish.bind(this);
    }
    handleFinish(processID, userIds){
        Meteor.call('deleteProcess', processID, userIds, (err, result)=>{
            if (err){
                console.log("error")
            }
            console.log("successful deletion")
        });

    }
    render(){
        const processes = this.props.processes.map((process)=>{
            return (
                <Process key={process._id} process={process} count={process.counter}
                         location={process.location} type={process.processType} userIds={process.userIds}
                         handleFinish={this.handleFinish} />
            )
        });
        return (
            <div>
                <h1> Open Processes </h1>
                {processes}
            </div>
        )
    }
}
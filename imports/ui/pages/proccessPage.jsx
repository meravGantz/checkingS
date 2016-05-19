/**
 * Created by jonathan on 19-May-16.
 */

import React from 'react';

import Proccess from '../components/Proccess.jsx';
export default class ProccessPage extends React.Component{
    constructor(props){
        super(props);
        this.handleFinish = this.handleFinish.bind(this);
        this.handleConversation = this.handleConversation.bind(this)
    }

    handleFinish(proccesID){

    }

    handleConversation(proccesID){

    }


    render(){
        const processes = this.props.processes.map((process)=>{
            return (
                <Process key={process._id} process={process} count = {process.counter}
                         location  = {process.location} count = {process.processType} userIds = {process.userIds}
                         handleFinish={this.handleFinish} handleConversation = {this.handleConversation}/>
            )
        });
        return (
            <div>
                <h1> Open Proccesses </h1>
                {processes}
            </div>
        )
    }
}
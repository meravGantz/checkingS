import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Communication} from '../../api/communication/communication';
import MsgBoard from '../components/msgBoard.jsx';
function composerFunction(props, onData){
    let handle;
    let communication;
    console.log("Message Container");
    //Should retreive all not responded msg's from server.

    console.log("communication inside");
    handle = Meteor.subscribe('communication');
    if (handle.ready()){
        communication = Communication.findOne({});
        onData(null, {communication});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(MsgBoard);


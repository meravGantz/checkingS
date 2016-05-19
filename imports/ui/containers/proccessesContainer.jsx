/**
 * Created by jonathan on 19-May-16.
 */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {proccesses} from '../../api/proccesses ';
import proccessPage from '../components/proccessPage.jsx';
function composerFunction(props, onData){
    let handle;
    let proccesses;
    console.log("Proccess Container");
    //Should retreive all not responded msg's from server.

    console.log("Proccess inside");
    handle = Meteor.subscribe('proccesses');
    if (handle.ready()){
        proccesses = Communication.findOne({});
        onData(null, {proccesses});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(MsgBoard);



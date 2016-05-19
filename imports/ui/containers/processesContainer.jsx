/**
 * Created by jonathan on 19-May-16.
 */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Processes} from '../../api/processes/processes';
import proccessPage from '../pages/proccessPage.jsx';
function composerFunction(props, onData){
    let handle;
    let processes;
    console.log("Process Container");

    handle = Meteor.subscribe('processes');
    if (handle.ready()){
        processes = Processes.find({});
        onData(null, {processes});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(proccessPage);

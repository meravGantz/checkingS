import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Lists} from '../../api/lists/lists';
import {ListsComponent} from '../components/ListsComponent.jsx';
import App from '../pages/App.jsx';
function composerFunction(props, onData){
    let handle;
    let lists;
    console.log("App container");
    handle = Meteor.subscribe('allLists');
    if (handle.ready()){
        lists = Lists.find({});
        onData(null, {lists});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(ListsComponent);


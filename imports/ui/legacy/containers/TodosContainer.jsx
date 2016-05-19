import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Todos} from '../../api/todos/todos';
import ListPage from '../pages/ListPage.jsx';
function composerFunction(props, onData){
    let handle;
    let todos;
    console.log("Todos container");
    handle = Meteor.subscribe('allTodos');
    if (handle.ready()){
        todos = Todos.find({});
        onData(null, {todos});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(ListPage);


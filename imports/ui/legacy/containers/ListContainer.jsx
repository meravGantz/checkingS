import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Lists} from '../../api/lists/lists';
import {Todos} from '../../api/todos/todos';
import ListPage from '../pages/ListPage.jsx';
function composerFunction(props, onData){
    let handle;
    let list;
    let todos;
    console.log("Todos container");
    handle = Meteor.subscribe('listWithTodos', props.params.listId);
    if (handle.ready()){
        list = Lists.findOne(props.params.listId);
        todos = Todos.find({listId: props.params.listId});
        onData(null, {list, todos});
    }
}
// Note the use of composeWithTracker
export default composeWithTracker(composerFunction)(ListPage);


import { Todos } from '../../api/todos/todos.js';
import {Meteor} from 'meteor/meteor';

Meteor.startup(()=>{
    if (Todos.find().count() == 0){
        Todos.insert({title: "First Demo item"});
        Todos.insert({title: "Second Demo Item"});
    }
});

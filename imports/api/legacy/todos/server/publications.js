import {Meteor} from 'meteor/meteor'

import {Todos} from '../todos';

Meteor.publish('allTodos', function(){
   return Todos.find({});
});


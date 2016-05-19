import {Meteor} from 'meteor/meteor';
import {Lists} from '../lists';
import {Todos} from '../../todos/todos';

Meteor.publish('list', function(listId){
   return  Lists.find({_id: listId});
});

Meteor.publish('listWithTodos', function(listId){
   return [
       Lists.find(listId),
       Todos.find({listId: listId})
   ]
});
Meteor.publish('allLists',function(){
    return Lists.find({});
});
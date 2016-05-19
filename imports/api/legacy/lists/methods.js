import {Meteor} from 'meteor/meteor';
import {Lists} from './lists';

Meteor.methods({
   addList(list){
       let listId;
       try{
           listId = Lists.insert({title: list.title})
       }catch(e){
           throw e;
       }
       return listId;
   }

});
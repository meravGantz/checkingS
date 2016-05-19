import { Meteor } from 'meteor/meteor';
import {Todos} from './todos'
Meteor.methods({
   addTodo(todo, listId){
      let todoId;
      try{
          console.log("here " + listId);
          todoId =  Todos.insert({title: todo.title, listId: listId})
      } catch(e){
          throw e;
      }
       return todoId;
   },
   deleteTodoById(todoId){
     try{
         Todos.remove({_id: todoId})
     } catch(e){
         throw e;
     }
     return true;
   }
});
/**
 * Example of how to expose method to API.
 */
if (Meteor.isServer){
    Meteor.method("add-item", function (title) {
        try{
            Todos.insert({title: title})
        }catch(e){
            throw e;
        }
        return "added new item!";
    }, {
        url: "add-item",
        getArgsFromRequest: function (request) {
            // Let's say we want this function to accept a form-encoded request with
            // fields named `a` and `b`.
            var content = request.body;

            // Since form enconding doesn't distinguish numbers and strings, we need
            // to parse it manually
            return [ content.title];
        }
    });
}

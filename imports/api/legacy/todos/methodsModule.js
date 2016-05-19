import {Meteor} from 'meteor/meteor';

export function createTodo(listId, todo, cb){
    Meteor.call('addTodo', todo, (err, todoId)=>{
        if (err){
            cb(err)
        }else{
            Meteor.call('addTodoToList', listId, todoId, (err, result)=>{
                if (err){
                    cb(err)
                }else{
                    cb(null, result);
                }
            })
        }
    })
}
export function removeTodo(listId, todoId, cb){
    Meteor.call('removeTodoFromList', listId, todoId, (err)=>{
        if (err){
            cb(err)
        }else{
            Meteor.call('deleteTodoById', todoId, (err, result)=>{
                if (err){
                    cb(err)
                }else{
                    cb(null, result);
                }
            })
        }
    })
}
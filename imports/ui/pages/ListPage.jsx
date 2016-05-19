import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Snackbar from 'material-ui/Snackbar';
import Todo from '../components/Todo.jsx';
import {TodoForm} from '../components/TodoForm.jsx';
export default class ListPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            successMsg: false
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTodoCreate = this.handleTodoCreate.bind(this);
    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleTitle(e){
        this.setState({title: e.target.value});
    }
    handleTodoCreate(event){
        event.preventDefault();
        console.log("Inside handle create");
        Meteor.call('addTodo', {title: this.state.title} ,this.props.list._id,(err, result)=>{
            if (err){
                console.log(err)
            }else{
                console.log(result);
                this.setState({title: ""});
                this.setState({successMsg: true})
            }
        })
    }
    handleRequestClose(e){
        this.setState({successMsg: false})
    }
    handleDelete(todoId){
        Meteor.call('deleteTodoById', todoId, (err)=>{
            if (err){
                console.log(err)
            }else{
                console.log("Yay Deleted.");
            }
        })
    }
    render(){
        const todos = this.props.todos.map((todo)=>{
            return (
                <Todo key={todo._id} todo={todo} handleDelete={this.handleDelete}/>
            )
        });
        return (
            <div>
                <h1>{this.props.list.title} List:</h1>
                {todos}
                <h3>Add New Todo:</h3>
                <TodoForm title={this.state.title} handleTitle={this.handleTitle}
                                                handleSubmit={this.handleTodoCreate} />
                <Snackbar
                    open={this.state.successMsg}
                    message="Todo Item was successfully inserted"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />

            </div>
        )
    }
}
ListPage.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
import React from 'react';
import {Meteor} from 'meteor/meteor';
import {TodoForm} from '../components/TodoForm.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Snackbar from 'material-ui/Snackbar';
export default class CreateTodoPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          title: "",
          successMsg: false
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleCreate(event){
        event.preventDefault();
        console.log("Inside handle create");
        Meteor.call('addTodo', {title: this.state.title} ,(err, result)=>{
            if (err){
                console.log(err)
            }else{
                console.log(result);
                this.setState({title: ""});
                this.setState({successMsg: true})
            }
        })
    }
    handleTitle(e){
        this.setState({title: e.target.value});
    }
    handleRequestClose(e){
        this.setState({successMsg: false})
    }
    render(){
        console.log("Create page");
        return(
            <div>
                <h3>Create A new Todo:</h3>
                <TodoForm title={this.state.title} handleTitle={this.handleTitle} handleSubmit={this.handleCreate}/>
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
CreateTodoPage.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
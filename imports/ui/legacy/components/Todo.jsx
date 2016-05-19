import React from 'react';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import ActionDelete from '../../../node_modules/material-ui/svg-icons/action/delete';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import {TodoForm} from '../components/TodoForm.jsx';
export default class Todo extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleDelete(){
        this.props.handleDelete(this.props.todo._id);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-2 zeroPadding">
                    Todo title: <Link to={`/todos/${this.props.todo._id}`}>{this.props.todo.title}</Link>
                </div>
                <div className="col-md-4">
                    <ActionDelete onClick={this.handleDelete} color={red500} style={{display: "inherit", height: '20px', width: '20px'}}/>
                </div>
            </div>
            )
    }
}
Todo.PropTypes = {todo: React.PropTypes.object};
Todo.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};

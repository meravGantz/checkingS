
import React from 'react';
import {Link} from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import ActionDelete from '../../../node_modules/material-ui/svg-icons/action/delete';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import Toggle from 'material-ui/Toggle';


export default class YesNoQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state = {Toggled: this.props.question.latestAnswer};

    }

    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }
    handleState(){
        this.setState({Toggled: !this.state.Toggled});
        Meteor.call('updateState', this.props.question._id,  this.state.Toggled)

    }
    render(){

        const styles = {
            block: {
                maxWidth: 250,
            },
            toggle: {
                marginBottom: 16,
            },
        };


        return (
            <div className="row">
                <div className="col-md-2 zeroPadding">
                        <Toggle
                            label={this.props.question.questionName}
                            style={styles.toggle}
                            defaultToggled={this.state.Toggled}
                            onToggle={this.handleState.bind(this)}
                            toggle={this.state.Toggled}
                        />
                </div>
            </div>
        );
    }
}
YesNoQuestion.PropTypes = {question: React.PropTypes.object};
YesNoQuestion.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};


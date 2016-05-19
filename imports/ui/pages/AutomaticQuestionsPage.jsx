/**
 * Created by talSofer on 5/19/16.
 */

import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Snackbar from 'material-ui/Snackbar';
import FreeTextQuestion from '../components/FreeTextQuestion.jsx';
import MulChoiseQuestion from '../components/MulChoiseQuestion.jsx';
import YesNoQuestion from '../components/YesNoQuestion.jsx';


export default class AutomaticQuestionsPage extends React.Component{
    constructor(props){
        super(props);


        this.handleDelete = this.handleDelete.bind(this);

    }

    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }


    render(){
        const yesNoQuestions = this.props.yesNoQues.map((question)=>{
            return (
                <YesNoQuestion key={question._id} question={question}/>
            )
        });
    }
}

AutomaticQuestionsPage.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
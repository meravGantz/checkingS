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
    }

    getChildContext() {
        return {muiTheme: getMuiTheme()};
    }

    render(){
        const education = this.props.educationQuestions.map((question)=>{
            return (
                <YesNoQuestion key={question._id} question={question}/>
            )
        });

        const publicTransportation = this.props.publicTransportationQuestions.map((question)=>{
            return (
                <YesNoQuestion key={question._id} question={question}/>
            )
        });

        const roads = this.props.roadsQuestions.map((question)=>{
            return (
                <YesNoQuestion key={question._id} question={question}/>
            )
        });


        return (
            <div className="row allAutoCategories">

                <div className="col-lg-4 autoQuesCategory" id="pubTransportation">
                    <p className="autoQuesTitle" id="pubTransTitle">

                        תחבורה ציבורית
                    </p>
                    <hr/>
                    <p className="Bullets">
                    {publicTransportation}
                        </p>
                </div>
                <div className="col-lg-4 autoQuesCategory" id="education">
                    <p className="autoQuesTitle" id="educationTitle">

                    מוסדות חינוך
                    </p>
                    <hr/>
                    <p className="Bullets">
                    {education}
                        </p>
                </div>
                <div className="col-lg-4 autoQuesCategory" id="roads">
                    <p className="autoQuesTitle" id="roadsTitle">
                    חסימות כבישים
                    </p>
                    <hr/>
                    <p className="Bullets">
                        {roads}
                        </p>

                </div>
            </div>

        )



    }
}

AutomaticQuestionsPage.childContextTypes = {muiTheme: React.PropTypes.object.isRequired};
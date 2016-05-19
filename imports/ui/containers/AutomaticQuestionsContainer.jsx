/**
 * Created by talSofer on 5/19/16.
 */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Questions} from  '../../api/questions/questions';
import AutomaticQuestionsPage from '../pages/AutomaticQuestionsPage.jsx';
import { Constants } from '../../Constants.jsx';



function composerFunction(props, onData){
    let handle;
    let publicTransportationQuestions;
    let educationQuestions;
    let roadsQuestions;

    console.log("AutoQuesContainer")
    handle = Meteor.subscribe('allAutoQues');
    if (handle.ready()){
        educationQuestions = Questions.find({questionCategory: Constants.EDUCATION});
        publicTransportationQuestions = Questions.find({questionCategory: Constants.PUBLIC_TRANSPORTATION});
        roadsQuestions = Questions.find({questionCategory: Constants.ROADS});
        onData(null, {educationQuestions, publicTransportationQuestions, roadsQuestions});
    }
}

export default composeWithTracker(composerFunction)(AutomaticQuestionsPage);
/**
 * Created by talSofer on 5/19/16.
 */

import { Meteor } from 'meteor/meteor';
import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Questions} from  '../../api/questions/questions';
import AutomaticQuestionsPage from '../pages/AutomaticQuestionsPage.jsx';


function composerFunction(props, onData){
    let handle;
    let yesNoQues;

    //let mulChoiseQues;
    //let freeTextQues;
    console.log("AutoQuesContainer")
    handle = Meteor.subscribe('allAutoQues');
    if (handle.ready()){
        yesNoQues = Questions.find({});
        //mulChoiseQues = Questions.find({questionType: "Mul"});
        //freeTextQues = Questions.find({questionType: "FREE"});
        onData(null, {yesNoQues});
    }
}

export default composeWithTracker(composerFunction)(AutomaticQuestionsPage);
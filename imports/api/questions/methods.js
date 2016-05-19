import {Meteor} from 'meteor/meteor';
import {Questions} from './questions';

Meteor.methods({
    updateState(questionId, newState) {
        try {
            Questions.update({_id: questionId}, {$set: {latestAnswer: newState}})
        }
        catch(e) {
            throw e;
        }
        return true;
    }


});


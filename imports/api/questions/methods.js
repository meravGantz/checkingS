import {Meteor} from 'meteor/meteor';
import {Questions} from './questions';
import {sendBotMsg} from '../communication/methods';
Meteor.methods({
    updateState(questionId, newState) {
        console.log("inside");
        let responseMsg;
        if (Meteor.isServer){
            let question = Questions.findOne(questionId);
            console.log(question);
            question.notifyUserId.forEach((userId)=>{
                if (!newState){
                    responseMsg = question.trueAnswer;
                }else{
                    responseMsg = question.falseAnswer;
                }
                console.log(userId);
                sendBotMsg(userId, responseMsg)
            });
        }
        try {
            Questions.update({_id: questionId}, {$set: {latestAnswer: newState}})
        }
        catch(e) {
            throw e;
        }
        return true;
    }
});
if (Meteor.isServer){
    Meteor.method("subscribe", function (type, userFbId) {
        console.log("subscribe "+ type +" "+ userFbId );
        try{
            Questions.update({questionType: type}, {
                $addToSet: {notifyUserId: userFbId}
            })
        }
        catch(e){
            console.log(e);
        }
        return true;

    }, {
        url: "subscribe",
        getArgsFromRequest: function (request) {
            // Let's say we want this function to accept a form-encoded request with
            // fields named `a` and `b`.
            var content = request.body;

            // Since form enconding doesn't distinguish numbers and strings, we need
            // to parse it manually
            return [ content.type, content.userFbId];
        },
        httpMethod: "POST"
    });
    Meteor.method("general", function (type) {
        console.log("general "+ type);
        let question = Questions.findOne({questionType: type});
        return question.latestAnswer;
    }, {
        url: "general",
        getArgsFromRequest: function (request) {
            // Let's say we want this function to accept a form-encoded request with
            // fields named `a` and `b`.
            var content = request.body;

            // Since form enconding doesn't distinguish numbers and strings, we need
            // to parse it manually
            return [ content.type, content.userFbId];
        },
        httpMethod: "GET"
    })
}


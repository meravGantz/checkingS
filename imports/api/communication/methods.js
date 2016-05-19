import {Meteor} from 'meteor/meteor';
import {Communication} from './communication';

Meteor.methods({
    addMsgToCommunication(userFbId, msgText){
        let message = {
            userMsg: false,
            msgContent: msgText
        };
        try{
            Communication.update({userFbId: userFbId}, {
                $addToSet: {messages: message}
            })
        }catch(e){
            throw e;
        }
        return true;
    }
});
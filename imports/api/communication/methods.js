import {Meteor} from 'meteor/meteor';
import {Communication} from './communication';
let options = (userId, text)=>{
    return (
        {
            data: {
                recipient: {
                    id: userId
                },
                message: {
                    text: text
                }
            }
        }
    )
};
Meteor.methods({
    addMsgToCommunication(userFbId, msgText){
        let message = {
            userMsg: false,
            msgContent: msgText
        };
        try{//TODO: edit responded flag.
            Communication.update({userFbId: userFbId}, {
                $addToSet: {messages: message}
            });
            //This is how i send msg to the bot.
            if (Meteor.isServer){
                sendBotMsg(userFbId, msgText)
            }
        }catch(e){
            throw e;
        }
        return true;
    },
    finishedSession(userFbId){
        //Notify bot to delete the person session. gilad will need to delete the context!
        //HTTP.call('POST', 'https://giladNgRok', {data: {userFbId: userFbId, sessionId: 'givenSessionId'}}, (err,res)=>{
        //    if (err){
        //        console.log(err)
        //    }else{
        //        console.log(res);
        //    }
        //});
        try{
            Communication.update({userFbId: userFbId}, {
                $set: {messages: []}
            })
        }catch (e){
            throw e;
        }
        return true;

    },
    submitToUsers(userIds, replyMsg){
        if (Meteor.isServer){
            userIds.forEach((userId)=>{
                sendBotMsg(userId, replyMsg);
            })
        }
    }
});
export function sendBotMsg(userFbId, msgText){
    HTTP.call('POST', 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAG75iLWOrEBAFS0wh83r63S83ZAv0ZC4HCPlbZA75uIDhYA2vRmttsLLJT8vpBfBlRVd1DD55ZChZCAcBjzB9MqnwuX5vbgjlJB1QBGayDmDPAFfDyOnXqeJISOJZAXc5VnQ8uXaNB7rxKDUS7x35hifSoiQ9dYKKoasV4LWS9gZDZD',
        options(userFbId, msgText), (err, result)=>{
            if (err){
                console.log(err)
            }else{
                console.log("finished");
            }
        })
}
if (Meteor.isServer){
    Meteor.method("unknown", function (userFbId, sessionId, question) {
        console.log("im here" + userFbId + " " + sessionId + " " + question);
        let message = {
            userMsg: true,
            msgContent: question
        };
       let communicate = Communication.findOne({userFbId: userFbId});
       if (communicate){
           try{
               Communication.update({userFbId: userFbId}, {
                   $addToSet: {messages: message}
               });
           }catch(e){
               console.log(e)
           }
           return true;
       } else{
           try{
               console.log("should be here");
               Communication.insert({
                   userFbId: userFbId,
                   sessionId: sessionId,
                   messages: [message],
                   responded: false
               })
           }catch(e){
               console.log(e)
           }
           return true;
       }
    }, {
        url: "unknown",
        getArgsFromRequest: function (request) {
            // Let's say we want this function to accept a form-encoded request with
            // fields named `a` and `b`.
            var content = request.body;

            // Since form enconding doesn't distinguish numbers and strings, we need
            // to parse it manually
            return [ content.user_fb_id, content.sessionId, content.question ];
        }
    })
}

let demoSchema = {
    userFbId: "Hayabok",
    sessionId: "givenSessionId",
    messages: [
        {
            userMsg: "false/true",
            msgContent: "bla bla bla bbla"
        }
    ],
    responded: "True/False (boolean)"

};
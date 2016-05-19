import {Meteor} from 'meteor/meteor';
import {Communication} from './communication';
let options = (userId, text)=>{
    return (
        {
            data: {
                recipient: {
                    id: '977048099078699'
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
        try{//TODO: change to exit the msg.
            Communication.update({userFbId: userFbId}, {
                $addToSet: {messages: message}
            });
            //This is how i send msg to the bot.
            sendBotMsg(userFbId, msgText)

        }catch(e){
            throw e;
        }
        return true;
    }
});
export function sendBotMsg(userId, text){
    HTTP.call('POST', 'https://graph.facebook.com/v2.6/me/messages?access_token=EAAG75iLWOrEBAFS0wh83r63S83ZAv0ZC4HCPlbZA75uIDhYA2vRmttsLLJT8vpBfBlRVd1DD55ZChZCAcBjzB9MqnwuX5vbgjlJB1QBGayDmDPAFfDyOnXqeJISOJZAXc5VnQ8uXaNB7rxKDUS7x35hifSoiQ9dYKKoasV4LWS9gZDZD',
        options(userFbId, msgText), (err, result)=>{
            if (err){
                console.log(err)
            }else{
                console.log("finished");
            }
        })
}

import {Meteor} from 'meteor/meteor';
import {Communication} from '../../api/communication/communication';
Meteor.startup(()=>{
    if (Communication.find({}).count() == 0){
        Communication.insert(
            {
                userFbId: "123",
                messages: [
                    {
                        userMsg: true,
                        msgContent: "Hey there"
                    },
                    {
                        userMsg: true,
                        msgContent: "heya"
                    }
                ],
                responded: false
            }
        )
    }
});

let demoSchema = {
    userFbId: "Hayabok",
    messages: [
        {
            userMsg: "false/true",
            msgContent: "bla bla bla bbla"
        }
    ],
    responded: "True/False (boolean)"

};

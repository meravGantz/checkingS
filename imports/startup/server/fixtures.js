import {Meteor} from 'meteor/meteor';
import {Communication} from '../../api/communication/communication';
import {Questions} from '../../api/questions/questions';

Meteor.startup(()=>{
    if (Communication.find({}).count()== 0){
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

    if (Questions.find({}).count() != 0){
        Questions.remove({});
        Questions.insert(
            {
                questionName: "האם כביש 1 פתוח?",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO"
            }
        )
        Questions.insert(
            {
                questionName: "האם מתקיימים לימודים בבתי הספר?",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO"
            }
        )
        Questions.insert(
            {
                questionName: "האם מתקיימים לימודים אקדמים?",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO"
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

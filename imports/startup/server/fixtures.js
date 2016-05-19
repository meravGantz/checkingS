import {Meteor} from 'meteor/meteor';
import {Communication} from '../../api/communication/communication';
import {Questions} from '../../api/questions/questions';
import {Processes} from '../../api/processes/processes';
//let demoSchema = {
//    processType: "garbage",
//    location: "הרב ברלין 5 ",
//    finishedStatus: "true/false (boolean)",
//    counter: 10,
//    userIds: []
//};

Meteor.startup(()=>{
    if (Processes.find({}).count() == 0){
        Processes.insert(
            {
                processType: "garbage",
                location: "היבוק",
                counter: 1,
                userIds: ['977048099078699']
            }
        )
    }
    if (Questions.find({}).count() != 0) {
        Questions.remove({});
    }
    if (Questions.find({}).count() == 0){
        Questions.insert(
            {
                questionName: "האם כביש 1 פתוח?",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO"
            }
        );
        Questions.insert(
            {
                questionName: "האם מתקיימים לימודים בבתי הספר?",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO"
            }
        );
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

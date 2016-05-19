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
                questionName: "כביש 1 פתוח",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO",
                questionCategory: "roads"

            }
        );
        Questions.insert(
            {
                questionName: "קיום לימודים בבתי הספר",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO",
                questionCategory: "education"
            }
        );
        Questions.insert(
            {
                questionName: "קיום לימודים במוסדות אקדמיים",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO",
                questionCategory: "education"

            }
        );
        Questions.insert(
            {
                questionName: "קיום פעילות בגנים",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO",
                questionCategory: "education"

            }
        );
        Questions.insert(
            {
                questionName: "רכבת קלה פעילה",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO",
                questionCategory: "publicTransportation"
            }
        );
        Questions.insert(
            {
                questionName: "פעילות אוטובוסים",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO",
                questionCategory: "publicTransportation"
            }
        );
        Questions.insert(
            {
                questionName: "פעילות מוניות שירות",
                latestAnswer: true,
                notifyUserId: ['234324', '2324325435'],
                questionType: "YES/NO",
                questionCategory: "publicTransportation"
            }
        );
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

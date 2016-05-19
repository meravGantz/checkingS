import {Meteor} from 'meteor/meteor';
import {Communication} from '../../api/communication/communication';
import {Questions} from '../../api/questions/questions';
import {Processes} from '../../api/processes/processes';
import {Constants} from '../../Constants.jsx';
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
    if (Questions.find({}).count() == 0){
        Questions.insert(
            {
                questionName: "כביש 1 פתוח",
                questionType: Constants.ROADS,
                latestAnswer: true,
                trueAnswer: "כרגע כביש 1 פתוח, לא מתוכננת סגירה כלשהי.",
                falseAnswer: "כביש 1 כרגע סגור",
                notifyUserId: [],
                questionCategory: "roads"
            }
        );
        Questions.insert(
            {
                questionName: "קיום לימודים בבתי הספר",
                latestAnswer: true,
                trueAnswer: "כרגע הלימודים בבתי הספר מתקיימים כסדרם",
                falseAnswer: "לא מתקיימים לימודים בבתי הספר",
                questionType: Constants.SCHOOL,
                notifyUserId: [],
                questionCategory: "education"
            }
        );
        Questions.insert(
            {
                questionName: "קיום לימודים במוסדות אקדמיים",
                latestAnswer: true,
                trueAnswer: "הלימודים במוסודות האקדמיים ייתקיימו כמתוכנן",
                falseAnswer: "לא יתקיימו לימודים במוסודות האקדמיים",
                questionType: Constants.UNIVERSITY,
                notifyUserId: [],
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

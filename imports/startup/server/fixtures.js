import {Meteor} from 'meteor/meteor';
import {Communication} from '../../api/communication/communication';
import {Questions} from '../../api/questions/questions';

Meteor.startup(()=>{
    //if (Communication.find({}).count() == 0){
    //    Communication.insert(
    //        {
    //            userFbId: "123",
    //            messages: [
    //                {
    //                    userMsg: true,
    //                    msgContent: "Hey there"
    //                },
    //                {
    //                    userMsg: true,
    //                    msgContent: "heya"
    //                }
    //            ],
    //            responded: false
    //        }
    //    )
    //}
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

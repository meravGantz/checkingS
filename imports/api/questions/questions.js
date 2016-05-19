import {Mongo} from 'meteor/mongo';

export const Questions = new Mongo.Collection('Questions');

//Questions schema
let demoSchema = {
    questionName: "Road 1 status(will be a constant)",
    latestAnswer: "closed (will be constant)",
    notifyUserId: ['234324', '2324325435'],
    questionType: "YES/NO (wil be constant)"

}
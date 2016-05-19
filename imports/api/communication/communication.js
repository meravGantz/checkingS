import {Mongo} from 'meteor/mongo';

export const Communication = new Mongo.Collection('Communication');

//Communication Schema:
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
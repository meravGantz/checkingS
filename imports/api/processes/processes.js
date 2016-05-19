import {Mongo} from 'meteor/mongo';

export const Processes = new Mongo.Collection('Processes');

let demoSchema = {
    processType: "garbage",
    location: "הרב ברלין 5 ",
    finishedStatus: "true/false (boolean)",
    counter: 10,
    userIds: []
};

Processes.insert(demoSchema)
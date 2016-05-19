import {Mongo} from 'meteor/mongo';

export const Processes = new Mongo.Collection('Processes');

let demoSchema = {
    processType: "garbage",
    location: "הרב ברלין 5 ",
    counter: 10,
    userIds: [11,22,44,55555,43]
};

let demoSchema1 = {
    processType: "garbage",
    location: "אלפסי 23",
    userIds: [321214,42141,12312,1,1,1]
};

Processes.insert(demoSchema)


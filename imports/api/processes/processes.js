import {Mongo} from 'meteor/mongo';

export const Processes = new Mongo.Collection('Processes');

let demoSchema = {
    processType: "garbage",
    location: "hayabok 12",
    finishedStatus: "true/false (boolean)"
};
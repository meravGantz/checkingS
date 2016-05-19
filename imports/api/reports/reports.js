import {Mongo} from 'meteor/mongo';

export const Reports = new Mongo.Collection('Reports');

let demoSchema = {
    reportType: "recycle (will be a constant)",
    isClose: "true/false (boolean)",
    location: "hayabok 14"
};
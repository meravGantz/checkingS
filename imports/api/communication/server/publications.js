import {Meteor} from 'meteor/meteor';
import {Communication} from '../communication';
Meteor.publish('communication', function(){
    console.log("here publish");
   return  Communication.find({responded: false})
});


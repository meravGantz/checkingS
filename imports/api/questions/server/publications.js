import {Meteor} from 'meteor/meteor';
import {Questions} from '../questions';

Meteor.publish('allAutoQues', function(){
    return Questions.find({});
});

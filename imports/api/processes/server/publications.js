import {Meteor} from 'meteor/meteor';

import {Processes} from '../processes';

Meteor.publish('processes', function(){
    return Processes.find({});
});

import {Meteor} from 'meteor/meteor';
import {Processes} from './processes';

Meteor.methods({
    addProcess(process){
        let processId;
        try{
            processId =  Processes.insert({processType: process.processType,
                location: process.location,
                finishedStatus: process.finishedStatus,
                counter: process.counter,
                userIds: process.userIds})
        } catch(e){
            throw e;
        }
        return processId;
    },
    deleteProcess(processId){
        console.log('deleteProcess')
        try{
            Processes.remove(processId)
        } catch(e){
            throw e;
        }
        return 1;
    }
});
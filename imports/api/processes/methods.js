import {Meteor} from 'meteor/meteor';
import {Processes} from './processes';
import {sendBotMsg} from '../communication/methods';
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
    deleteProcess(processId, userIds){
        console.log('deleteProcess');
        try{
            Processes.remove(processId)
        } catch(e){
            throw e;
        }
        if (Meteor.isServer){
            userIds.forEach((userId)=>{
                sendBotMsg(userId, "משאית הזבל יצאה מהעיריה, תודה לך!");
            });
        }
        return 1;
    }
});

//let demoSchema = {
//    processType: "garbage",
//    location: "הרב ברלין 5 ",
//    finishedStatus: "true/false (boolean)",
//    counter: 10,
//    userIds: []
//};
if (Meteor.isServer){
    Meteor.method("clean-garbage", function (processType, location, userFbId) {
        console.log("clean garbage method" + processType + " " + location + " " + userFbId);
        let process = Processes.findOne({location: location, processType: processType});
        if (process){
            try{
                Processes.update({location: location}, {
                    $addToSet: {userIds: userFbId}
                });
            }catch(e){
                console.log(e)
            }
            return true;
        } else{
            try{
                console.log("should be here");
                Processes.insert({
                    processType: processType,
                    location: location,
                    userIds: [userFbId]
                })
            }catch(e){
                console.log(e)
            }
            return true;
        }
    }, {
        url: "clean-garbage",
        getArgsFromRequest: function (request) {
            // Let's say we want this function to accept a form-encoded request with
            // fields named `a` and `b`.
            var content = request.body;

            // Since form enconding doesn't distinguish numbers and strings, we need
            // to parse it manually
            return [ content.processType, content.location, content.userId ];
        }
    })
}
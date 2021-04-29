const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//creating asgn model and schema
const asgnSchema=new Schema({//asssignment schema variables are declared
    courseName:{
        type:String,
        required:[true,"Course name field required."]
    },
    assignmentName:{
        type:String,
        required:[true,"Assignment Name required."]
    },
    dueDate:{
        type:Date,
        required:[true,"Date field required."]
    }
});
const Asgn=mongoose.model('asgn',asgnSchema);//creating assignment model
module.exports=Asgn;//exporting assignment schema
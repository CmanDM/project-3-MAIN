const Asgn = require("./asgn-model");//importing the model

exports.listAll=(req,res)=>{
    Asgn.find({}).then(function(asgns){
        res.status(200).send(asgns);//listing all the records
    });
    
}
exports.listSingle=(req,res)=>{
    Asgn.find({_id:req.params.id}).then(function(asgns){//listing the relevant record when founded
        res.status(200).send(asgns);
    })
}
exports.createNew=async (req,res)=>{
    var newListing=new Asgn(req.body);//storing the variables in the database
    Asgn.create(req.body).then(function(asgn){
        res.send(asgn);
    })
}
exports.deleteRecord=async (req,res)=>{
    Asgn.findOneAndDelete({_id:req.params.id}).then(function(asgn){//Deleting the relevant record
        res.status(200).send(asgn);
    })
}
exports.updateRecord=async (req,res)=>{
    Asgn.findOneAndUpdate({_id:req.params.id},req.body).then(function(asgn){//updating the relevant record
        res.status(200).send(asgn);
    })
}

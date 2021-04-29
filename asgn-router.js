const express=require('express');//importing the express framework
const router=express.Router();//importing router library
const asgnController=require('./asgn-contoller');//importing the required
router.get("/asgn-api",asgnController.listAll);//creating the route needed to list all
router.get("/asgn-api/:id",asgnController.listSingle);//creating the route for listing single record
router.post("/asgn-api",asgnController.createNew);//creating the route for posting the data into the database
router.delete("/asgn-api/:id",asgnController.deleteRecord);//creating the route for delete a record
router.put("/asgn-api/:id",asgnController.updateRecord);//creating the route for update the record
module.exports=router;//exporting the routes for the app.js
const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeDesignation:String,
    employeeLocation:String,
    salary:Number
})
const employee=mongoose.model('emp',employeeSchema);    
module.exports=employee
#! /usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer .prompt([
    {message:"Enter first number", type: "number", name:"firstnumber"},
    {message:"Enter second number", type: "number",name:"secondnumber"},
    {message:"select one of the operator to perform your operation",
     type: "list",
     name: "operators",
     choices:["Addition","Substraction","Multiply","Division"],
},

]);
//Condition
if(result.operators === "Addition"){
    console.log(result.firstnumber + result.secondnumber);
}
else if(result.operators === "Substraction"){
    console.log(result.firstnumber - result.secondnumber);
}
else if(result.operators === "Multiply"){
    console.log(result.firstnumber * result.secondnumber);
}
else if (result.operators === "Division"){
    console.log(result.firstnumber / result.secondnumber);
}
else{
    console.log("please select valid operators");
}

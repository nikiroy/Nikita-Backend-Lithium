const express = require('express');
const router = express.Router();
const xyz = require('../logger/logger')                        //importing external package
const underscore = require('underscore')
const x2 = require('../util/helper')
const x3 = require('../validator/formattor.js')
const lodash = require('lodash')



router.get('/test-me', function (req, res) {                        //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)                      //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    console.log(xyz.wel()) //---1st pro----
    
    res.send('My first ever api!')

    console.log("Date: ", x2.printDate()) //---2nd pro---
    console.log("Month: ", x2.printMonth())
    console.log("info: ", x2.getBatchInfo())

    console.log(x3.tr()); //---3rd pro---
    console.log(x3.upr());
    console.log(x3.lowr());

    const months = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]; //---4th pro---
    console.log(lodash.chunk(months,4))
    const oddNum=[1,3,5,7,9,11,13,15,17,19];
    console.log(lodash.tail(oddNum,9));

    const numArr=[2,5,4,2,7,25,98,56,42,2,5,4,2,7]
    console.log(lodash.union(numArr));
    const keyValue=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    console.log(lodash.fromPairs(keyValue)) 









    })

module.exports = router;


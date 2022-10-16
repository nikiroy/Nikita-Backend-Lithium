const url = "https://www.google.com"

let printSomething = function() {
    console.log("Request details are - a, b, c")
    return "done"
}
const welcome = function () {
    console.log("Welcome to my application. I am nikita and a part of FunctionUp lithium cohort")
}
let abc = 2022
module.exports.myUrl = url
module.exports.myFunction = printSomething
module.exports.wel = welcome


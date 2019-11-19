"use strict";
//compile the .ts file to .js file
//https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes
exports.__esModule = true;
var message = "Hello World";
var message2 = 'This is test...';
var sum;
var title = "Sunny Learning Code";
var isBeginner = true;
var total = 0;
var name = "sunny";
var sentence = "my name is " + name + "\nI am a  beggainer with typescript";
var n = null;
var u = undefined;
var isNew = null;
var myname = undefined;
//array
var listArray = [1, 2, 3];
var listArr2 = [1, 2, 3];
var person1 = ['chirs', 23];
var array3 = [1, 2, 7];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
// enum color{Red, Green, Blue};
// let mycolor : color = color.Green;
var myval = 10;
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myval)) {
    console.log(myval.name);
}
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyT;
anyT = 20;
anyT = true;

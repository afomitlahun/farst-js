console.log("Hello, World!");
let name ="amsal";
let age = 22;
const country = "ethiopia";
let isstudent = true;
console.log(name);
console.log(age);
console.log(country);
console.log(isstudent);
age =24;
console.log(age);
age =15;
console.log(age);
if(age >=18) {
    console.log("adult");
}
else{
    console.log("minor");
}
console.log(10>5);
console.log(10<5);
5=="5"
5==="5"
age =22;
let hasid =true;

if (age >= 18 && hasid){
    console.log("allowed");
} else {
    console.log("not allowed")
}
for (let i=1; i<=5; i++){
    console.log(i*2);
}
for (let i=1; i<=5; i++){
    console.log("hello amsal")


}
for (let i=10; i>=1; i--){
    console.log (i);     
}
function greet(name){
    console.log("hello " + name);
}
greet("amsal");
greet("john");
greet("mary");
function add(a,b){
    return a+b;
}
console.log(add(5,10));
const sub = (a,b) =>{
    return a-b;
};
console.log(sub(10,5));
const square = number => number*number;
console.log(square(5));
console.log(square(8));
import { test }  from "./arr.js";
console.log(test(5,10));
import {multiply} from "./arr.js";
console. log(multiply(5,4));


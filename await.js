 //{function getnumber(){
    //return Promise.resolve(100);

//}
//async function test(){
   // console.log("start");
    //const num =await getnumber();
    //console.log(num);
//console.log("end");//

//}
//test(); 
//console.log("outside");
//}

async function run(){
    console.log("a");
    await Promise.resolve();
    console.log("b");
    console.log("c");

}
console.log("x");
run();
console.log("y");
try {
    console.log ("start");
    let age = 20;
    console.log(age);

}
catch (error){
    console.log("error")
}
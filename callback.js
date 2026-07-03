function breaktime(){
    console.log('watch movie');

}
function process(freetime){
    console.log('studying for exam');
    freetime();
    
}
process(breaktime);

// another example of callback function
function calculete(a,b,callback){
    let result =a-b;
    callback(result);//=display(6)
}
function display(num){
    console.log("answer:"+num);//answer:6
}
calculete(10,4,display);
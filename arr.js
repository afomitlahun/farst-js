const array = [1,2,3,4,5];
function arrey (arr){
    return arr*2;
}
console.log(array);
array.push(6);array.pop()
array.unshift(0);
console.log(array);
let number = [2,3,4];
let result = number.map(number=>number+1);
console.log(result);
let pr =array.map(array=>array*3);
console.log(pr);
let res=array.map(arrey);
console.log(res);
const filteredarray=array.filter(arr=>arr<3);
const sum = array.reduce((sum,array)=>sum+array,0);
console.log(sum);
console.log(filteredarray);
export  const test=(a,b) => a+b;
export const multiply=(a,b)=> a*b;
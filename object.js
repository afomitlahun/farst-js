const person ={
    name:"amsal",
    age:22,
    city:"addis abeba",
    
};
person.departement ="s.w";
person.age =33;
console.log(person);
const phone ={
    brand:"samseng",
    model:"s20",
    price:15000
};
console.log(phone.brand);
console.log(phone.model);
console.log(phone.price);
const employe={
    name:"edenn",
    age:"20",
    postion:"developer",
}
const property ="name";
console.log(employe[property]);
const pp ={
    brand:"samseng",
    model:"s20",
    show :function(){
        return this.brand +" "+ this.model;
    }
};
console.log(pp.show());
const pt ={
    name:"sara",
    age:34
};
const jsonn=JSON.stringify(pt);
console.log(jsonn);
const jsonda =
'{"name":"sara","age":54}';
const personn=JSON.parse(jsonda);
console.log(personn.name);
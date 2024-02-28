let obj1 = {name:"Raja", age:5};
let obj2 = {age:5, name:"Raja"};

let isSame = true;

if(Object.keys(obj1).length === Object.keys(obj2).length){
  console.log("length is same");

for (let key in obj1){
  if (obj1[key]===obj2[key]){
    console.log(key+" has same value");
  } else {
    isSame = false;
    console.log(key+ " doesnt have same value");
  }

}

}else {
  isSame = false;
  console.log("objects are different")
}
if (isSame){
  console.log("objects are same");

}else {
  console.log("objects are different");
}

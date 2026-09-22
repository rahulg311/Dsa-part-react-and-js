const array = [
  {name: 'ram', age: 16},
  {name: 'shyam', age: 22}
];

let newonh = [];

for (let key of array) {
  //  option 1

  let obj = {
    username: key.name,
    userage: key.age
  };

  newonh.push(obj);

  //  option 2
  let newb = {};
  for (let ckey in key) {
    //  console.log(key[ckey])
    newb[`user${ckey}`] = key[ckey];
  }
  newonh.push(newb);
}
console.log(newonh);

//  option 3

const array = [
  {name: 'ram', age: 16},
  {name: 'shyam', age: 22}
];

array.forEach((obj) => {
  obj.fullName = obj.name;
  delete obj.name;

  obj.userAge = obj.age;
  delete obj.age;
});

console.log(array);

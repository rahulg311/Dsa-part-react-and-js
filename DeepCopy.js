let p = { a: 1, b: { c: 2 } };

let copyP = structuredClone(p);
OR;
let copyP1 = JSON.parse(JSON.stringify(p));

copyP.b.c = 100;

console.log(p); // 2 (original not affected)
console.log(copyP); // 100

// const data = ["a","d","c","b","z"]
const data = { a: 1, b: { c: 2, x: { ab: 3 } } };



function repatedStr(a) {
  if (typeof a !== "object" || a == null) return a;

  let copy = a.constructer != "object" ? [] : {};

  for (let key in a) {
    copy[key] = repatedStr(a[key]);
  }

  return copy;
}
let deepcopy = repatedStr(data);

deepcopy.b.c = "99";
console.log(data);

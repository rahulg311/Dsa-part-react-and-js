const employees = [
  { name: "Rahul", department: "IT" },
  { name: "Amit", department: "HR" },
  { name: "Ravi", department: "IT" },
  { name: "Neha", department: "HR" }
];

function grouping(list){
    let group = {}

    for(let i=0; i<=list.length-1; i++){
        let key = list[i].department
        if(!group[key]){
            group[key] =[]
        }
       group[key].push(list[i])
    }
    return group

}
console.log(grouping(employees))



// const employees = [
//   { name: "Rahul", department: "IT" },
//   { name: "Amit", department: "HR" },
//   { name: "Ravi", department: "IT" },
//   { name: "Neha", department: "HR" }
// ];

const grouped = employees.reduce((acc, employee) => {
  const key = employee.department;

  if (!acc[key]) {
    acc[key] = [];
  }

  acc[key].push(employee);

  return acc;
}, {});

console.log(grouped);
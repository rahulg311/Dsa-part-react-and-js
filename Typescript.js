/*
============================================================================

TypeScript is an open-source programming language developed by Microsoft that extends JavaScript by 
adding static typing and other features that help catch errors before code runs.

Why TypeScript?

JavaScript is flexible, but that flexibility can lead to bugs. 
TypeScript lets you specify the types of variables, function parameters, 
and return values, making code easier to understand and maintain.



Agar aap TypeScript Intersection Type ki baat kar rahe ho, to Intersection (&) ka use multiple types ko combine karne ke liye hota hai.

Example
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type EmployeePerson = Person & Employee;

const emp: EmployeePerson = {
  name: "Rahul",
  salary: 50000
};


1. string
============================================================================
Definition:
Text value store karne ke liye.

Example:
*/

let userName: string = "Rahul";

console.log(userName); // Rahul


/*
============================================================================
2. number
============================================================================
Definition:
Numeric value store karne ke liye.
*/

let age: number = 28;

console.log(age);


/*
============================================================================
3. boolean
============================================================================
Definition:
True ya False value store karne ke liye.
*/

let isLogin: boolean = true;

console.log(isLogin);


/*
============================================================================
4. any
============================================================================
Definition:
Kisi bhi type ki value store kar sakte ho.
Type checking disable ho jati hai.
*/

let data: any = "Rahul";

data = 100;
data = true;


/*
============================================================================
5. unknown
============================================================================
Definition:
any jaisa hai lekin use karne se pehle type check karna padta hai.
*/

let value: unknown = "Rahul";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}


/*
============================================================================
6. Array
============================================================================
Definition:
Same type ki multiple values store karne ke liye.
*/

let users: string[] = ["Rahul", "Amit", "Ravi"];

console.log(users[0]);


/*
============================================================================
7. Tuple
============================================================================
Definition:
Fixed length + fixed types.
*/

let employee: [string, number] = ["Rahul", 50000];

console.log(employee);


/*
============================================================================
8. Enum
============================================================================
Definition:
Fixed constant values group karne ke liye.
*/

enum Role {
  Admin,
  User,
  Manager
}

console.log(Role.Admin); // 0


/*
============================================================================
9. Union Type
============================================================================
Definition:
Ek variable me multiple types allow karne ke liye.
*/

let id: string | number;

id = 101;
id = "EMP101";


/*
============================================================================
10. Literal Type
============================================================================
Definition:
Sirf specific values allow karne ke liye.
*/

let status: "success" | "error";

status = "success";
// status = "pending"; ❌ Error


/*
============================================================================
11. Interface
============================================================================
Definition:
Object structure define karne ke liye.
*/

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rahul",
  age: 28
};


/*
============================================================================
12. Type Alias
============================================================================
Definition:
Custom reusable type create karne ke liye.
*/

type Employee = {
  name: string;
  salary: number;
};

const emp: Employee = {
  name: "Rahul",
  salary: 50000
};


/*
============================================================================
13. Function Return Type
============================================================================
Definition:
Function kya return karega define karne ke liye.
*/

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10));


/*
============================================================================
14. Optional Parameter
============================================================================
Definition:
Parameter dena optional ho.
*/

function greet(name?: string) {
  console.log(name);
}

greet();
greet("Rahul");


/*
============================================================================
15. Default Parameter
============================================================================
Definition:
Default value set karne ke liye.
*/

function welcome(name: string = "Guest") {
  console.log(name);
}

welcome();
welcome("Rahul");


/*
============================================================================
16. Void
============================================================================
Definition:
Function kuch return nahi karta.
*/

function printName(): void {
  console.log("Rahul");
}


/*
============================================================================
17. Never
============================================================================
Definition:
Function kabhi return nahi karega.
*/

function throwError(): never {
  throw new Error("Error");
}


/*
============================================================================
18. Type Assertion
============================================================================
Definition:
Compiler ko manually type batana.
*/

let value1: any = "Rahul";

console.log((value1 as string).length);


/*
============================================================================
19. Generic
============================================================================
Definition:
Reusable type-safe function banane ke liye.
*/

function getData<T>(data: T): T {
  return data;
}

console.log(getData<string>("Rahul"));
console.log(getData<number>(100));


/*
============================================================================
20. keyof
============================================================================
Definition:
Object ki keys nikalne ke liye.
*/

type User1 = {
  name: string;
  age: number;
};

type Keys = keyof User1;

// "name" | "age"


/*
============================================================================
21. typeof
============================================================================
Definition:
Variable ka type nikalne ke liye.
*/

const person = {
  name: "Rahul",
  age: 28
};

type PersonType = typeof person;


/*
============================================================================
22. Partial
============================================================================
Definition:
Saari properties optional bana deta hai.
*/

interface User2 {
  name: string;
  age: number;
}

const updateUser: Partial<User2> = {
  name: "Rahul"
};


/*
============================================================================
23. Required
============================================================================
Definition:
Saari properties required bana deta hai.
*/

type UserRequired = Required<User2>;


/*
============================================================================
24. Pick
============================================================================
Definition:
Specific property select karne ke liye.
*/

type UserName = Pick<User2, "name">;

const userOnlyName: UserName = {
  name: "Rahul"
};


/*
============================================================================
25. Omit
============================================================================
Definition:
Specific property remove karne ke liye.
*/

type UserWithoutAge = Omit<User2, "age">;

const obj: UserWithoutAge = {
  name: "Rahul"
};


/*
============================================================================
26. Record
============================================================================
Definition:
Dynamic key-value object banane ke liye.
*/

const scores: Record<string, number> = {
  Rahul: 90,
  Amit: 85
};


/*
============================================================================
27. Readonly
============================================================================
Definition:
Value change nahi kar sakte.
*/

interface User3 {
  readonly id: number;
}

const u: User3 = {
  id: 1
};

// u.id = 2 ❌ Error


/*
============================================================================
28. Class
============================================================================
Definition:
Object blueprint create karne ke liye.
*/

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p = new Person("Rahul");


/*
============================================================================
29. Access Modifier
============================================================================
Definition:
Data access control karne ke liye.
*/

class Employee1 {
  public name = "Rahul";

  private salary = 50000;

  protected department = "IT";
}


/*
============================================================================
30. Interface Implements
============================================================================
Definition:
Class me interface apply karne ke liye.
*/

interface IUser {
  name: string;
}

class Developer implements IUser {
  name = "Rahul";
}


/*
============================================================================
31. Optional Chaining
============================================================================
Definition:
Undefined error avoid karne ke liye.
*/

const customer = {
  address: {
    city: "Delhi"
  }
};

console.log(customer?.address?.city);


/*
============================================================================
32. Nullish Coalescing
============================================================================
Definition:
Null ya undefined ho to default value dena.
*/

let username = null;

console.log(username ?? "Guest");

// Output: Guest


/*
============================================================================
33. Type Guard
============================================================================
Definition:
Runtime me type identify karne ke liye.
*/

function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}


/*
============================================================================
Most Asked Interview Questions
============================================================================

1. Interface vs Type
2. Any vs Unknown
3. Union Type
4. Generic
5. keyof
6. typeof
7. Partial
8. Pick
9. Omit
10. Record
11. Readonly
12. Optional Chaining
13. Nullish Coalescing
14. Type Assertion
15. Type Guard

============================================================================
*/
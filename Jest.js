/*
|--------------------------------------------------------------------------
| Jest
|--------------------------------------------------------------------------
| Syntax                | Definition / Kab Use Hota Hai
|--------------------------------------------------------------------------


Jest Definition

Jest is a JavaScript testing framework developed by Meta (Facebook) that is 
used to write and run tests for JavaScript applications. It provides features
 such as test runners, assertions, mocking, and code coverage reporting.






 React Testing Library Definition

React Testing Library (RTL) is a library for testing React components.
It focuses on testing components the way users interact with them, 
rather than testing implementation details.





*/

test()                // Ek test case likhne ke liye use hota hai.
it()                  // test() ka alternative hai, same kaam karta hai.
describe()            // Related test cases ko group karne ke liye.
expect()              // Actual result ko verify karne ke liye.
toBe()                // Primitive values (number, string, boolean) compare karne ke liye.
toEqual()             // Object aur Array compare karne ke liye.
toContain()           // Array ya string me value exist karti hai ya nahi check karne ke liye.
toThrow()             // Function error throw kar raha hai ya nahi check karne ke liye.
jest.fn()             // Mock/Fake function create karne ke liye.
jest.mock()           // API, module ya dependency ko mock karne ke liye.
beforeEach()          // Har test case se pehle run hota hai.
afterEach()           // Har test case ke baad run hota hai.
beforeAll()           // Sabhi test cases se pehle ek baar run hota hai.
afterAll()            // Sabhi test cases complete hone ke baad ek baar run hota hai.


/*
|--------------------------------------------------------------------------
| React Testing Library (RTL)
|--------------------------------------------------------------------------
| Syntax                | Definition / Kab Use Hota Hai
|--------------------------------------------------------------------------
*/

render()             // React component ko virtual DOM me render karne ke liye.
screen               // Rendered elements ko access karne ke liye.
getByText()          // Text ke basis par element find karne ke liye.
getByRole()          // Role (button, textbox, checkbox) ke basis par element find karne ke liye.
getByLabelText()     // Label ke basis par input field find karne ke liye.
getByPlaceholderText() // Placeholder text ke basis par input find karne ke liye.
getByTestId()        // data-testid attribute ke basis par element find karne ke liye.
queryByText()        // Element find karega, na mile to error nahi dega.
findByText()         // Async data/API load hone ke baad element find karne ke liye.
fireEvent            // Click, change, submit jaise events trigger karne ke liye.
userEvent            // Real user interaction simulate karne ke liye (recommended).
waitFor()            // Async operation complete hone ka wait karne ke liye.


/*
|--------------------------------------------------------------------------
| Interview One-Liner Answers
|--------------------------------------------------------------------------
*/

test()              // Single test case.
describe()          // Group of test cases.
expect()            // Assertion/verification.
jest.fn()           // Mock function.
jest.mock()         // Mock module/API.
render()            // Component render.
screen              // Access rendered DOM.
getByText()         // Find by text.
getByRole()         // Find by role.
fireEvent.click()   // Simulate click.
userEvent.type()    // Simulate typing.
waitFor()           // Wait for async updates.
findByText()        // Async element search.
queryByText()       // Safe search without error.




//  exmpale k sth 
/*
============================================================================
JEST + REACT TESTING LIBRARY INTERVIEW CHEAT SHEET
Definition + Example + Kab Use Hota Hai
============================================================================
*/


/*
============================================================================
1. test()
============================================================================
Definition:
Single test case likhne ke liye use hota hai.
*/

test("add two numbers", () => {
  expect(2 + 3).toBe(5);
});


/*
============================================================================
2. it()
============================================================================
Definition:
test() ka alternative hai.
Behavior same hai.
*/

it("should return true", () => {
  expect(true).toBe(true);
});


/*
============================================================================
3. describe()
============================================================================
Definition:
Multiple related test cases ko group karne ke liye.
*/

describe("Math Operations", () => {

  test("Addition", () => {
    expect(2 + 2).toBe(4);
  });

  test("Subtraction", () => {
    expect(5 - 2).toBe(3);
  });

});


/*
============================================================================
4. expect()
============================================================================
Definition:
Actual result verify karne ke liye.
*/

expect(10).toBe(10);


/*
============================================================================
5. toBe()
============================================================================
Definition:
Primitive values compare karne ke liye.
(Number, String, Boolean)
*/

expect(100).toBe(100);
expect("Rahul").toBe("Rahul");


/*
============================================================================
6. toEqual()
============================================================================
Definition:
Array aur Object compare karne ke liye.
*/

expect([1, 2]).toEqual([1, 2]);

expect({
  name: "Rahul"
}).toEqual({
  name: "Rahul"
});


/*
============================================================================
7. toContain()
============================================================================
Definition:
Array ya String me value exist karti hai ya nahi.
*/

expect(["React", "JS"]).toContain("React");

expect("Hello Rahul").toContain("Rahul");


/*
============================================================================
8. toThrow()
============================================================================
Definition:
Error throw ho raha hai ya nahi check karne ke liye.
*/

function errorFunction() {
  throw new Error("Something Wrong");
}

expect(() => errorFunction()).toThrow();


/*
============================================================================
9. jest.fn()
============================================================================
Definition:
Mock/Fake function create karne ke liye.
*/

const mockFn = jest.fn();

mockFn();

expect(mockFn).toHaveBeenCalled();


/*
============================================================================
10. jest.mock()
============================================================================
Definition:
API ya Module ko mock karne ke liye.
*/

import axios from "axios";

jest.mock("axios");

axios.get.mockResolvedValue({
  data: [{ id: 1 }]
});


/*
============================================================================
11. beforeEach()
============================================================================
Definition:
Har test case se pehle run hota hai.
*/

beforeEach(() => {
  console.log("Before Test");
});


/*
============================================================================
12. afterEach()
============================================================================
Definition:
Har test case ke baad run hota hai.
*/

afterEach(() => {
  console.log("After Test");
});


/*
============================================================================
13. beforeAll()
============================================================================
Definition:
Sab test cases se pehle sirf ek baar run hota hai.
*/

beforeAll(() => {
  console.log("Start Application");
});


/*
============================================================================
14. afterAll()
============================================================================
Definition:
Sab test complete hone ke baad run hota hai.
*/

afterAll(() => {
  console.log("Close Application");
});


/*
============================================================================
REACT TESTING LIBRARY
============================================================================
*/


/*
============================================================================
15. render()
============================================================================
Definition:
React Component render karne ke liye.
*/

render(<App />);


/*
============================================================================
16. screen
============================================================================
Definition:
Rendered elements access karne ke liye.
*/

screen.getByText("Hello");


/*
============================================================================
17. getByText()
============================================================================
Definition:
Text ke basis par element find karta hai.
*/

render(<button>Submit</button>);

screen.getByText("Submit");


/*
============================================================================
18. getByRole()
============================================================================
Definition:
Role ke basis par element find karta hai.
*/

render(<button>Save</button>);

screen.getByRole("button");


/*
============================================================================
19. getByLabelText()
============================================================================
Definition:
Label ke basis par input find karta hai.
*/

render(
  <>
    <label>Email</label>
    <input />
  </>
);

screen.getByLabelText("Email");


/*
============================================================================
20. getByPlaceholderText()
============================================================================
Definition:
Placeholder ke basis par input find karta hai.
*/

render(
  <input placeholder="Enter Name" />
);

screen.getByPlaceholderText(
  "Enter Name"
);


/*
============================================================================
21. getByTestId()
============================================================================
Definition:
data-testid ke basis par element find karta hai.
*/

render(
  <h1 data-testid="title">
    React
  </h1>
);

screen.getByTestId("title");


/*
============================================================================
22. queryByText()
============================================================================
Definition:
Element na mile to error nahi deta.
Null return karta hai.
*/

expect(
  screen.queryByText("Loading")
).not.toBeInTheDocument();


/*
============================================================================
23. findByText()
============================================================================
Definition:
Async API data ke liye use hota hai.
Promise return karta hai.
*/

const user =
  await screen.findByText("Rahul");

expect(user).toBeInTheDocument();


/*
============================================================================
24. fireEvent
============================================================================
Definition:
Events trigger karne ke liye.
*/

fireEvent.click(button);

fireEvent.change(input, {
  target: {
    value: "Rahul"
  }
});


/*
============================================================================
25. userEvent
============================================================================
Definition:
Real User actions simulate karta hai.
RTL Recommended.
*/

await userEvent.click(button);

await userEvent.type(
  input,
  "Rahul"
);


/*
============================================================================
26. waitFor()
============================================================================
Definition:
Async code complete hone ka wait karta hai.
Mostly API testing me use hota hai.
*/

await waitFor(() => {

  expect(
    screen.getByText("Users")
  ).toBeInTheDocument();

});


/*
============================================================================
REAL INTERVIEW EXAMPLE
============================================================================
*/

function Counter() {

  const [count, setCount] =
    React.useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increment
      </button>
    </>
  );
}


/*
============================================================================
Counter Component Test
============================================================================
*/

import {
  render,
  screen,
  fireEvent
} from "@testing-library/react";

test("Increment Counter", () => {

  render(<Counter />);

  const button =
    screen.getByText(
      "Increment"
    );

  fireEvent.click(button);

  expect(
    screen.getByText("1")
  ).toBeInTheDocument();

});


/*
============================================================================
MOST ASKED INTERVIEW QUESTIONS
============================================================================

describe()      -> Test group banane ke liye
test()          -> Single test case
expect()        -> Assertion
toBe()          -> Primitive compare
toEqual()       -> Object/Array compare
toContain()     -> Value exist check
toThrow()       -> Error testing
jest.fn()       -> Mock Function
jest.mock()     -> Mock API/Module

render()        -> Component render
screen          -> DOM access
getByText()     -> Find by text
getByRole()     -> Find by role
queryByText()   -> Safe search
findByText()    -> Async search
fireEvent()     -> Event trigger
userEvent()     -> Real user action
waitFor()       -> Async wait

============================================================================
*/


## 1️⃣ What is the difference between `var`, `let`, and `const`?

| Keyword | Scope | Reassignable | Redeclarable |
|---------|-------|--------------|--------------|
| `var`   | Function-scoped | ✅ Yes | ✅ Yes |
| `let`   | Block-scoped    | ✅ Yes | ❌ No |
| `const` | Block-scoped    | ❌ No  | ❌ No |

**Example:**
```js
var a = 1;
let b = 2;
const c = 3;

b = 4; // ✅ allowed
c = 5; // ❌ Error
2️⃣ What is the difference between map(), forEach(), and filter()?
Method	Returns	Use case
forEach	undefined	Iterate array for side-effects
map	New array	Transform elements
filter	New array	Filter elements based on condition

Example:

js
const numbers = [1,2,3,4];

numbers.forEach(n => console.log(n));      // Logs each number
const doubled = numbers.map(n => n*2);    // [2,4,6,8]
const evens = numbers.filter(n => n%2===0); // [2,4]
3️⃣ What are arrow functions in ES6?
Shorter syntax for functions

Lexically binds this

Examples:

js
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => console.log("Hello!");
4️⃣ How does destructuring assignment work in ES6?
Array Destructuring:

js
const arr = [1,2,3];
const [a,b] = arr;
console.log(a,b); // 1 2
Object Destructuring:

js
const person = {name:"Alice", age:25};
const {name, age} = person;
console.log(name, age); // Alice 25
5️⃣ Explain template literals in ES6. How are they different from string concatenation?
Use backticks `

Allow interpolation and multi-line strings

Example:

js
const name = "Alice";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;

const multiLine = `Line 1
Line 2
Line 3`;
Difference from String Concatenation:
js

const oldMessage = "My name is " + name + " and I am " + age + " years old.";
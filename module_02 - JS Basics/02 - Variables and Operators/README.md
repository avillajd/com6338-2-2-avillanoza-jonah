# Variables and Primitive Data Types

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Comments

Comments allow us to write notes inside of code that are ignored by the compiler/interpreter.

```js
// this is a single line comment
```
&nbsp;

```js
/*
This is a block comment.
Use this for larger comments that may
span multiple lines.
*/
```

&nbsp;
## Primitive Data Types

JavaScript contains multiple primitive data types:

- `number` - Can be whole numbers (integers) or decimals (floats) E.g.: `1`, `3.4`
- `boolean` - E.g.: `true` or `false`
- `string` - words or sentences wrapped in single quotes `''` or double quotes `""`. E.g.: `'Hello'`
- `undefined` - the default empty value in JS
- `null` - also an empty value, but this is usually set by the programmer on purpose
- `Symbol` - Used for creating unique values, we won't need this for our purposes

&nbsp;
## Variable Assignment and Declaration

Variables can be declared using the `var` keyword. Variables can be named using letters, numbers, and the symbols `$` and `_`. It is popular convention to use [camel casing](https://www.w3schools.com/js/js_conventions.asp) when naming variables and functions in JavaScript.

Examples:

```js
var banana;
```
&nbsp;

Once declared, variables can be assigned a value using `=`:

```js
banana = 4;
```
&nbsp;

Variables can be declared and assigned with a single statement:

```js
var banana = 4;
```

&nbsp;
## Debugging with `console.log`

`console.log` can be used to log values to the developer tools console. Users will not be able to see these logs unless they open the console. It is best practice to remove all `console.log` invocations from production code.

Example:

```js
console.log('Hello World') // prints 'Hello World';
```
&nbsp;

Variables may be passed to `console.log`:

```js
var banana = 'yummy';
console.log(banana) // prints 'yummy'
```
&nbsp;

`console.log` accepts multiple arguments and places a single space between them:

```js
var favFruit = 'banana'
console.log('My favorite fruit is the', favFruit)
// prints 'My favorite fruit is the banana'
```

&nbsp;
## Determining Types

The type of a variable can be determined with `typeof`:

```js
var num = 3;
console.log(typeof num) // prints 'number'
console.log(typeof 'hello') // prints 'string'
console.log(typeof true) // prints 'boolean'
```

&nbsp;
## Variable Reassignment

Variables can be given another value after assignment that overwrites the current value:

```js
var bananasAreYummy = true;
console.log(bananasAreYummy); // prints true

bananasAreYummy = false;
console.log(bananasAreYummy); // prints false
```

&nbsp;
## Reserved Words

There are certain [reserved words](https://www.w3schools.com/js/js_reserved.asp) in JavaScript that cannot be used when naming variables and functions:

```js
// will error
var function;

// will also error
function if() {}
```
&nbsp;

[View the list of reserved words here.](https://www.w3schools.com/js/js_reserved.asp)

&nbsp;
## Statements, JavaScript execution, and Semicolon usage:

JavaScript is executed line-by-line from top to bottom of a file:

```js
var banana = 1;             // executed 1st
var apple = 2;              // executed 2nd
console.log(banana, apple); // executed 3rd
```
&nbsp;

Statements may be placed on the same line if semicolons are used, however this impairs readability and is not recommended:

```js
var banana = 1; var apple = 2; console.log(banana, apple);
```
&nbsp;

Semicolons are optional but recommended in JavaScript if using line breaks. If semicolons are omitted the JavaScript runtime will insert them before running code. It is ultimately up to individual programmers and teams to decide if semicolons are necessary in a codebase.

Example:

```js
var banana = 1
var apple = 2
console.log(banana, apple) // prints 1, 2
```
&nbsp;

&nbsp;
## Arithmetic Operators

Arithmetic operators can be used to perform math operations in JavaScript:

```js
console.log(4 + 4); // prints 8
console.log(4 - 4); // prints 0
var product = 16 * 2;
console.log(product); // prints 32
var quotient = product / 8;
console.log(quotient); // prints 4
console.log(4**2); // prints 16
```
&nbsp;

The [remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) can be particularly useful in JS. It can be used to determine if numbers evenly divide:

```js
console.log(16 % 4); // prints 0
console.log(9 % 2); // prints 1
```
&nbsp;

[You can find a list of Arithmetic operators here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators).

&nbsp;
## String Concatenation

The addition operator `+` may also be used with strings to combine strings together:

```js
console.log('fire' + 'truck'); // prints 'firetruck'
```
&nbsp;

This may be used with variables:

```js
var userName = prompt('What is your name?');
console.log('Hello, ' + userName); // prints 'Hello, <username>'
```
&nbsp;

And even `number` values due to JavaScript's type coercion:

```js
console.log('I have ' + 3 + ' homework assignments due Sunday!')
// prints "I have 3 homework assignments due Sunday!"
```

&nbsp;
## Increment and Decrement Operators

Increment and decrement operators can be used to increase and decrease a numbers value by 1:

```js
var num = 3;
num++;
console.log(num); // prints 4
num--;
console.log(num); // prints 3
```
&nbsp;

These operations can also be performed with other expressions:

```js
var num = 10;
// Three ways to increment:
num++;
// is the same as
num += 1;
// is the same as
num = num + 1
```
&nbsp;

Naturally the latter two ways of incrementing can add values aside from `1`.
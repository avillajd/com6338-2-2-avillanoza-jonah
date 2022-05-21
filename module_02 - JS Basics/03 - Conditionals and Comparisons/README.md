# Operators and Conditionals

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Equality Operators

JavaScript's equality operators can be used to compare two values. The `===` operator compares type and value:

```js
console.log(3 === 'banana'); // prints false
console.log(3 === 3); // prints true
```
&nbsp;

The `==` operator compares value and will attempt to coerce (match) types:

```js
console.log(3 == '3'); // prints true
console.log(3 == 'yikes'); // prints false
console.log(0 == false); // prints true
```
&nbsp;

The `!==` ("not equal") operator is an inversion of `===`:

```js
console.log(3 !== 3); // false
console.log(true !== 'turkey'); // true
```
&nbsp;

Similarly `!=` will be an inversion that attempts to coerce types:

```js
console.log(true != false); // true
console.log('3' != 3); //false
```
&nbsp;

**NOTE:** Due to the coercive nature of `==` and `!=`, it's recommended to use `===` and `!==` instead unless the former operators are needed explicitly for comparison without types. [Read more about type coercion on MDN](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion).

[View the MDN Relational Operator Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators)

&nbsp;
## Unary "Not" Operator

The `!` operator (sometimes referred to as "bang" or "not"), may be used to invert a value:

```js
console.log(!true); // false
console.log(!3 === 3); // false
```
&nbsp;

[View the MDN Unary Operator Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#unary_operators)

&nbsp;
## Relational Operators

Aside from equality, operators can be used to compare two values:

```js
console.log(3 > 2); // true
console.log(4 <= 4); // true
console.log(3 >= 4); // false
```
&nbsp;

[View the MDN Relational Operator Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators)

&nbsp;
## Logical Operators

Logical operators can be used to expand logic by combining expressions:

```js
var num = 5;
// true, 5 is greater than 0 and less than 10
console.log(num > 0 && num < 10);
```
&nbsp;

```js
var num = 15;
var skipCheck = true;
// true because skipCheck is true
// even though 15 > 10
console.log(skipCheck || num < 10);
skipCheck = false
// false, 15 > 10
console.log(skipCheck || num < 10);
num = 8
// true, skipCheck is false but 8 < 10
console.log(skipCheck || num < 10);
```
&nbsp;

[Read more about logical operators at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#binary_logical_operators)

&nbsp;
## Conditionals

Conditional statements (`if`/`else`) can be used to create branching logic in programs.

```js
var isTrue = true;
if (isTrue) {
  console.log('truth!'); // prints 'truth!'
} else {
  console.log('nope') // doesn't run
}
```
&nbsp;

`if` statements may be used on their own without an accompanying `else`, but `else` statements must follow an `if`:

```js
// this works
if (3 === 3) {
  console.log('works!')
}
```
&nbsp;

```js
// this will error
else {
  console.log('nope');
}
```
&nbsp;

`if` and `else` statements may also be chained together:

```js
var myName = 'Lee';
if (myName === 'Suzy') {
  console.log('nope!'); // skipped
} else if (myName === 'Lee') {
  console.log('yes!'); // prints yes!
}
```
&nbsp;

```js
var myName = 'Lee';
if (myName === 'Suzy') {
  console.log('nope!'); // skipped
} else if (myName === 'Bob') {
  console.log('no!'); // skipped
} else {
  console.log('yes!'); // prints yes!
}
```
&nbsp;

[View the MDN tutorial on conditionals.](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
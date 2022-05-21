# Returning from Functions

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Returning from Functions

A `return` statement will stop function execution and may or may not return a value. Values returned from function invocations can be stored to a variable or passed to another function.

Example or a returned value:

```js
function myFunction() {
  return 'Hello from myFunction';
}

var returnedValue = myFunction();

console.log(returnedValue); // prints 'Hello from myFunction'
```
&nbsp;

Example of a return stopping execution:

```js
function myFunction() {
  console.log('first console.log');
  return; // code after this return is 'unreachable'
  console.log('second console.log');
}

myFunction(); // only prints 'first console.log'
```
&nbsp;

Example of passing a function that returns a value to another function:

```js
function returnSomething() {
  return 'banana';
}

function logSomething(thingToLog) {
  console.log(thingToLog);
}

logSomething(returnSomething()); // prints 'banana'
```
&nbsp;

By default a function with no return statement or an empty return will return `undefined`.

No `return`:

```js
function noReturn() {}

var thingToLog = noReturn();

console.log(thingToLog); // prints 'undefined'
```
&nbsp;
Empty `return`:

```js
function emptyReturn() {
  return;
}

var thingToLog = emptyReturn();

console.log(thingToLog); // prints 'undefined'
```

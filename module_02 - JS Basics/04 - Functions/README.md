# Functions

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Function Declaration

Functions are a way of invoking code repeatedly and/or programmatically.

Functions are declared like this:

```js
function myFunction() {
  // your code here
}
```

&nbsp;
## Function invocations

Functions may be invoked (called) by attaching `()` to the end of the function name:

```js
function myFunction() {}

myFunction();
```

&nbsp;
## Function parameters and arguments

Functions may receive parameters:

```js
function myFunction(param1, param2) {}
```
&nbsp;

When real values are passed to a function, these are referred to as 'arguments':

```js
myFunction('banana', true);
```
&nbsp;

If arguments are omitted when calling a function, they will be `undefined`:

```js
function myFunction(param1, param2) {
  console.log(param1);
  console.log(param2);
}

myFunction('banana') // prints 'banana', then undefined
```

&nbsp;
## Functions as arguments, anonymous functions

[Functions are first-class functions in JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function). This means they can be treated like any other variable.

You may assign a function to a variable:

```js
var myFunction = function() {
  console.log('woohoo!');
}
myFunction(); // prints 'woohoo!'
```
&nbsp;

**Note:** The function in the above example is assigned to a variable, but is not named. We refer to nameless functions as 'anonymous functions'.

You may also pass a function as an argument to another function:

```js
function mySecondFunction(function2) {
  function2();
}

function myFunction() {
  console.log('woohoo!!!')
}

mySecondFunction(myFunction); //prints woohoo!!!
```
&nbsp;

The above example could be performed without declaring the second function and instead writing it as an anonymous function:

```js
function mySecondFunction(function2) {
  function2();
}

mySecondFunction(function() {
  console.log('woohoo!!!');
}); //prints woohoo!!!
```
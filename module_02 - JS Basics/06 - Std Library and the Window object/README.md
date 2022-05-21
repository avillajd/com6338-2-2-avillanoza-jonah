# Built-ins

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

&nbsp;
## Globals and the Window Object

JavaScript has certain useful variables and functions that are included by default. In other languages you might hear this referred to as the "standard library". [You can see a list of built-ins here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

Example using [parseInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt):

```js
var actualNum = parseInt('12'); // parseInt is built-in!
console.log(actualNum); // 12, the number (no quotes)
```
&nbsp;

Another example is the [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) object:

```js
console.log(Math.PI); // 3.141592653589793
console.log(Math.floor(3.8)) // 3
console.log(Math.random()) // random num between 0-1
```
&nbsp;


When executing JavaScript in a browser, there's a object included that's called the `window` object. [You can see a list of methods and properties attached to the window object here](https://developer.mozilla.org/en-US/docs/Web/API/Window).

In the browser, we can use built-ins from `window` without actually specifying `window`. In fact, we've been doing so all along with `console.log`, which is really `window.console.log`:

```js
console.log('hello');
// is the same as
window.console.log('hello');
```

&nbsp;
## Alert, Confirm, and Prompt

Some useful window methods for the beginning JavaScript developer are [alert](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert), [confirm](https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm), and [prompt](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt). These functions can be used in the browser to easily send notices to the user and receive user input.

These methods all create pop-up dialogue boxes that the user can see and interact with. The pop-ups are styled according to the user's operating system.

**PLEASE NOTE THIS ABOUT THESE METHODS:**

While `alert`, `confirm`, and `prompt` are useful to the novice JavaScript developer, they are not used often if at all in modern websites.

The reasons for this are two-fold:

1. These methods all block JavaScript's main thread, preventing any other script from executing until a user click's `OK` or `Cancel`.
1. While these methods block the main thread they prevent any interaction with the page, effectively freezing the window for the user.

As we advance in this course, we will learn better ways to interact with users that do not detract from user experience.

&nbsp;
### Alert

Most likely the most infamous is the `alert` method. The `alert` method has a single parameter that is used to display a message to the user. This method does not return any value, it's used purely to send info to the user.

Example:

```js
// creates a pop-up dialogue box displaying 'Hello World Again!'
alert('Hello World Again!');
// Note: this is again the same as: window.alert()
```

&nbsp;
### Confirm

The `confirm` method is used to ask a user a yes/no question. It takes a single parameter like `alert`, but in addition displays `OK` and `Cancel` buttons to the user and will return `true` or `false` respectively.

Example:

```js
var acceptsCookies = confirm('This site uses cookies. Is that OK?');
console.log(acceptsCookies) // prints true or false depending on OK/Cancel
```

&nbsp;
### Prompt

The `prompt` method asks a user to type input into the dialogue box. It also takes a single `message` parameter but returns a string containing whatever the user has typed, or `null` if the user clicks `Cancel`.

Examples:

```js
var userName = prompt('What is your name?');
console.log('Hello,', userName);
// prints "Hello, <user input>" if the user types something and clicks OK
// prints "Hello, null" if the user types and clicks Cancel
```
&nbsp;

Note that if the user types nothing and clicks `OK`, an empty string `""` will be returned:

```js
console.log(prompt("just click OK")); // prints ""
```

&nbsp;
## String and Number Built-in properties and methods

It's sometimes said that everything is an `object` in JavaScript (more on Objects later). While this isn't entirely true, the spirit of the statement arises from wrapper objects that are invoked whenever primitive JavaScript values are created.

The wrapper objects that are applied to primitives come with various helper properties and methods that can greatly aid the programmer.

Examples of String properties/methods usage:

```js
var myName = 'Lee';
console.log(myName.length); // prints 3
console.log(myName.toUpperCase()) // prints LEE
```
&nbsp;

Examples of Number properties/methods usage:

```js
var num = 3;
console.log(num.toString()) // prints "3"
console.log(num.toFixed(4)) // prints "3.0000"
```
&nbsp;

Strings and numbers also have static methods built-in as well. This means you'll invoke the global built-in name of these objects to use the methods, instead of calling them directly on a value.

Example of the static String method [fromCharCode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode):

```js
var str = String.fromCharCode(97)
console.log(str) // "a"
```
&nbsp;

Example of the static Number property [MAX_VALUE](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE):

```js
console.log(Number.MAX_VALUE) // prints a huge integer
```
&nbsp;

Note: `parseInt` from above is available globally, but is in fact a static `Number` method:

```js
console.log(parseInt('12')) // prints 12
// is the same as:
console.log(Number.parseInt('12')) // prints 12
```
&nbsp;

Refer to the MDN documentation for a list of properties and methods attached to the [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) objects.
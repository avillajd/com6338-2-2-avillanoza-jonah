# Truthy and Falsy values

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

Truthy and Falsy refer to the behavior of JavaScript interpreting values that are not booleans as booleans.

&nbsp;
## Falsy Values

JavaScript has a number of values that it considers "falsy". The most commonly seen and used are as follows:

```js
var falsyVals = [
  0,
  "",        // an empty string
  null,
  undefined,
  NaN,       // not a number
  false,
]
```
&nbsp;

[You can view an exhaustive list of falsy values here.](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

&nbsp;
## Truthy values

Truthy values are any value that cannot be considered "falsy". While that sounds obtuse, we could think of a list that looks something like:

```js
var truthy = [
  20,       // any non-0 number
  "banana", // any non-empty string
  "    ",   // this includes strings of just spaces
  {},       // objects (including empty)
  [],       // arrays (including empty)
  true,
]
```

&nbsp;
## Why is this useful?

Truthy/falsy values will often allow us to write succinct code without expressly checking for a value to match another value.

Consider the case where we have a function that returns a value to us like `prompt`:

```js
var username = prompt("What is your name?")

if (username) { // could be a string, an empty string, or null
  alert('Hi, ' + username)
} else {
  alert('Fine, keep your secrets.')
}
```

In the above example, `prompt` may return `null`, an empty string `""`, or the user's name depending on what action the user takes. Instead of writing a lengthy conditional to expressly check those values like `if(username !== null && username !== "")`, we can simply call `if(username)` to check for the existence of a value.
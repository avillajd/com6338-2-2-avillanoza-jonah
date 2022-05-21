# Adding JavaScript

(**NOTE:** View a rendered version of this file in VS Code with `ctrl-shift-v` or `cmd-shift-v`)

JavaScript can be added to a page (an HTML file) in two ways.

&nbsp;
## Inline Scripts

JavaScript can be written within a `script` tag inside of HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example</title>
</head>
<body>
  <script>
    console.log('This code is running!')
  </script>
</body>
</html>
```

&nbsp;
## External files

JavaScript can also be run by including a `script` tag that uses the `src` attribute that points to a JavaScript file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example</title>
</head>
<body>
  <script src="index.js"></script>
</body>
</html>
```
&nbsp;

Inside of `index.js`:
```js
console.log('running!')
```
&nbsp;

&nbsp;
## The Location of Scripts

Script tags should always be placed a the bottom of the `body` element. The reason for this is that files are processed from top to bottom, and we want our HTML and CSS code to be parsed and rendered by the browser before our JavaScript so that our markup can be rendered as quickly as possible.

JavaScript must be downloaded, read, interpreted, and run whenever it is linked in an HTML file. This means that we can include length JavaScript files in our code that delay the rendering of our pages.

&nbsp;
## Multiple Script Tags

Note that if we include multiple `script` tags on the page, they will be parsed and interpreted in order.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Example</title>
</head>
<body>
  <script>
    console.log('This code is running first!')
  </script>
  <script>
    console.log('This code is running second!')
  </script>
  <script>
    console.log('This code is running third!')
  </script>
  <script>
    console.log('This code is running fourth!')
  </script>
</body>
</html>
```

Because of this, we should include third-party scripts first before linking to our own scripts just like we do with CSS stylesheets.
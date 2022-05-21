var username = prompt("What's your name?")

if (username && username.trim())  {
  alert('Hello, ' + username.trim())
} else {
  alert('Hello')
}
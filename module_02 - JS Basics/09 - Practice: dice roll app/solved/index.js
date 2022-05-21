function roll() {
  var sidesStr = prompt('how many sides does the dice have?')
  var sidesNum = parseInt(sidesStr)
  // early out if non-number or user clicks cancel
  // NaN is falsy
  if (!sidesNum) return

  var rollResult = Math.floor(Math.random() * sidesNum) + 1
  alert('you rolled a ' + rollResult)
  var rollAgain = confirm('roll again?')
  if (rollAgain) {
    return roll()
  }
}

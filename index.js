function roll() {
    var sidesStr = prompt ('How many sides should the dice have?')
    var numOfSides = parseInt(sidesStr)
    if (!numOfSides) return
    var rollResult = Math.floor(Math.random() * numOfSides) + 1
  alert ('You rolled a ' + rollResult)
}

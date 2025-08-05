/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


function convert(){
    const userInput = document.getElementById("input").value

    let lengthS = document.getElementById("length")
    let volumeS = document.getElementById("volume")
    let massS = document.getElementById("mass")
    let distanceS = document.getElementById("distance")

    let meter = userInput * 3.281 
    let feet = userInput * 0.304
    let liter = userInput * 0.264
    let gallon = userInput * 3.785
    let kilo = userInput * 2.204
    let pound = userInput * 0.453
    let kilometer = userInput * 0.621
    let miles = userInput * 1.609



    lengthS.innerHTML = `${userInput} Meters = ${feet.toFixed(3)} feet | ${userInput} feet = ${meter.toFixed(3)} meters `
    volumeS.innerHTML = `${userInput} Liters = ${gallon.toFixed(3)} gallons | ${userInput} gallons = ${liter.toFixed(3)} liters`
    massS.innerHTML = `${userInput} Kilos = ${pound.toFixed(3)} pounds | ${userInput} pounds = ${kilo.toFixed(3)} kilos`
    distanceS.innerHTML = `${userInput} Miles = ${miles.toFixed(3)} kilometers | ${userInput} kilometers = ${kilometer.toFixed(3)} miles`

}


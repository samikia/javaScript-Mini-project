let firstNumber = Number(prompt("Please insert first number"))
let secondNumber = Number(prompt("Please insert second number"))
let calculate = prompt("Please choose the your desired action: \n 1-multiple \n 2-devid \n 3-sum \n 4-power")
// if (calculate === "1") {
//     let answer = firstNumber * secondNumber
//     alert(answer)
// } else if (calculate === "2") {
//     let answer = firstNumber / secondNumber
//     alert(answer)
// } else if (calculate === "3") {
//     let answer = firstNumber + secondNumber
//     alert(answer)
// } else if (calculate === "4") {
//     let answer = firstNumber ** secondNumber
//     alert(answer)
// } else {
//     alert("Please choos the correct number")
// }

switch (calculate) {
    case "1":
        alert(firstNumber * secondNumber)
        break;
    case "2":
        alert(firstNumber / secondNumber)
        break;
    case "3":
        alert(firstNumber + secondNumber)
        break;
    case "4":
        alert(firstNumber ** secondNumber)
        break;
    default:
        alert("please choose the correct number")
}
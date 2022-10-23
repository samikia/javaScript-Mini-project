
let userNumbers = []
let userNumber = 0
let result = 0
while (userNumber != -1) {
    userNumber = Number(prompt("enter a number: \n if you dont want to continue please press -1 "))
    if (userNumber != -1) {
        userNumbers.push(userNumber)
    }
} for (let average = 0; average < userNumbers.length; average++) {
    result += userNumbers[average]
} console.log(result / userNumbers.length)
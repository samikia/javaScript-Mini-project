let minuts = +prompt("Enter the minuts")
let second = +prompt("Enter the second")
let timer = setInterval(function () {
    if (second === -1) {
        minuts--
        second = 59
    }
    if (minuts === 0 && second === 0) {
        clearInterval(timer)
    }
    console.log("timer" + minuts + ":" + second)
    second--
}, 1000)
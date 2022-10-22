let minutes = Number(prompt("insert minuts:", 000))
let minutsToHour = minutes / 60
if (isNaN(minutsToHour)) {
    alert("Please inseart a number")
} else {

    alert(minutsToHour, "hours")
}

let bulb = document.getElementById('bulb')
let bulbSituation = false
function turnOffOn() {
    if (bulbSituation) {
        bulb.setAttribute('src', './img/bulbOff.jpg')
        bulbSituation = false
    } else {
        bulb.setAttribute('src', './img/bulbOn.png')
        bulbSituation = true
    }

}
let result = 0
let avrage = 0
for (number = 0; number < 5; number++) {
    result = result + Number(prompt("insert" + (number + 1) + "number"))
    avrage = result / 5

} alert(avrage)
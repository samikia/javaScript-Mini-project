let age = prompt("Please inseart your age:", 28)
let gender = prompt("Please insert your gender(male, female)", "")
if (gender === "male" || age < 18) {
    alert("You are not allowed to enter")
} else {
    alert("You are allowed to enter")
}
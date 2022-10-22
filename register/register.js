let userName = prompt("Please inseart your username : ")
let password = prompt("Please insert your password :")
if (userName.length < 3 || password.length < 8) {
    alert("Your username or password is too short")
} else {
    alert("You registered successfully ")
}

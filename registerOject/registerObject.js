let userInfo = [{
    id: 1,
    name: "Amin",
    lastName: "rad",
    age: 20,
    email: "amin@gmail.com"
},
{
    id: 2,
    name: "Ali",
    lastName: "blue",
    age: 28,
    email: "ali@gmail.com"
},
{
    id: 1,
    name: "reza",
    lastName: "radan",
    age: 30,
    email: "reza@gmail.com"
}]
let userName = prompt("enter your name:")
let userLastName = prompt("enter your lastname:")
let userAge = prompt("enter your age:")
let userEmail = prompt("enter your email:")
if (userName.length < 3 || userName.length > 10) {
    alert("name charecter should be between 3to10 ")
}
else if (userLastName.length < 3 || userLastName.length > 15) {
    alert("name charecter should be between 3to15 ")
}
else if (isNaN(userAge)) {
    alert("you should insert a number ")
} else {
    let newUser = {
        id: 4,
        name: userName,
        lastName: userLastName,
        age: userAge,
        email: userEmail
    }
    userInfo.push(newUser)
    console.log(userInfo)
}
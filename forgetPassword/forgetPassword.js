let users = [
    { id: 1, userName: "sami", email: "kia.sami@gmail.com", password: "12345" },
    { id: 2, userName: "hesam", email: "hesam@gmail.com", password: "12345" },
    { id: 3, userName: "momo", email: "momo@gmail.com", password: "12345" },
    { id: 4, userName: "iman", email: "iman@gmail.com", password: "12345" },
]
let ask = prompt("enter your user name:")
let forgetPassword = users.find(function (user) {
    return user.userName === ask
})
if (forgetPassword === undefined) {
    alert("your username is wrong")
} else {

    alert("your passwors is:" + forgetPassword.password)
}
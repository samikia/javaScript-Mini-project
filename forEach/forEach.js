let usersInfo = [{
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
usersInfo.forEach(function (user) {

    console.log("name:" + user.name, "lastname:" + user.lastName)
})
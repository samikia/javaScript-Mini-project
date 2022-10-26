let todo = [{ id: 1, name: "learn js", situation: false }, { id: 2, name: "workout", situation: true }, { id: 3, name: "learning react", situation: false }]
let ask = prompt("1-If you want to add todo type 1 \n 2-If you want delete todo select2 \n 3-If you want to change the situation choos3")

if (ask === "1") {
    let newToDo = prompt("enter the name of to do:", " ")
    let newToDoObject = {
        id: todo.length + 1,
        name: newToDo,
        situation: false,
    }
    todo.push(newToDoObject)
    console.log(todo)
} else if (ask === "2") {
    let deletToDo = prompt("choose the to do that want to delete:")

    let removeTodo = todo.findIndex(function (remove) {
        return remove.name === deletToDo

    })
    todo.splice(removeTodo, 1)
    console.log(todo)
} else if (ask === "3") {
    let changeSituation = prompt("if you want situation part: ")
    todo.some(function (toDo) {
        if (toDo.name === changeSituation) {
            toDo.situation = true
        }
    })
    console.log(todo)
} else {
    alert("please choos the right number")
}

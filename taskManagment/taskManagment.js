let tasks = { ali: ['html', 'css', 'js'], amin: ['react', 'talwind'], arman: ['pyton', 'jango'], matin: ['typescript', 'php'] }
let newTask = prompt('Please inseart the task name: ', " ")
let employee = prompt('Enter the employee name: ', '')
let employeeTasks = tasks[employee]
employeeTasks.push(newTask)
console.log(tasks)

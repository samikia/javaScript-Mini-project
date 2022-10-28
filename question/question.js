let question = [
    { id: 1, question: "2+2", answer: "4" },
    { id: 2, question: "Where is Iran capital?", answer: "tehran" },
    { id: 3, question: "2*4", answer: "8" },
    { id: 4, question: "12/3", answer: "4" },
]
let score = 0
let mainAnswer = ''
question.forEach(function (questionsT) {
    mainAnswer = prompt(questionsT.question + "?")
    if (mainAnswer === questionsT.answer) {
        score++
    }
})
alert(score)
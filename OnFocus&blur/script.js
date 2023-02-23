let $=document
let userMessage=$.querySelector(".user-validation")
let passMessage=$.querySelector(".pass-validation")
let userInput=$.querySelector('.username')

let passInput=$.querySelector('.password')
function userValidation(){
if(userInput.value.length<8){
userMessage.style.color='red'
userMessage.innerHTML='must contain 8 characters'
userMessage.style.display='block'
}else{
userMessage.style.color='green'
userMessage.innerHTML='correct'
}
}
function passValidation(){
    // alert("hi")
    if(passInput.value.length<8){
        passMessage.style.color='red'
        passMessage.innerHTML='must contaion 8 charecter'
        passMessage.style.display='block'
    }else{
        passMessage.style.color='green'
        passMessage.innerHTML='correct'
    }
}
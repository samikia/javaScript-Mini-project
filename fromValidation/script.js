let userNameInput=document.querySelector('.username')
let passwordInput=document.querySelector('.password')
let modal=document.querySelector(".modal")

function dataValidation(){
    let userNameValue=userNameInput.value
    let passwordValue=passwordInput.value
    if(userNameValue.length<8||passwordValue<4){
        modal.innerHTML=" Please enter the information correctly"
        modal.style.background='red'
       modal.style.display="inline"
    }else{
        modal.style.background='green'
        modal.innerHTML="you are login successfully:)"
        modal.style.display='inline'
    }
}
setTimeout(function(){
    modal.style.display='none'
},3000)
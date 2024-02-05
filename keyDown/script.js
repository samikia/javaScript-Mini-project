let locationKey=document.querySelector('#location')
let title=document.querySelector('title')
let keyCodeElem=document.getElementById('keyCode')
let keyElem=document.getElementById('key')
let locationElem=document.getElementById('location')
let whichElem=document.getElementById('which')
let codeElem=document.getElementById('code')

document.body.addEventListener('keydown',function(event){
    event.preventDefault()
    starter.style.display='none'
    heading.style.display='flex'
    ascii.style.display='flex'
    infos.style.display='flex'

    let eventKeyCode=event.keyCode
    let eventKey=event.key
    let eventLocaation=event.location
    let eventWhich=event.which
    let eventCode=event.code

    keyCodeElem.innerHTML=eventKeyCode
    keyElem.innerHTML=eventKey
    locationElem.innerHTML=eventLocaation
    whichElem.innerHTML=eventWhich
    codeElem.innerHTML=eventCode
})
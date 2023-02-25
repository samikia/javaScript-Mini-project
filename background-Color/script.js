
// let colorArray=['red','blue','gray','yellow','green','pink']
// let randomColorArray;
let red ,green, blue
setInterval(function(){
//    randomColorArray= Math.floor(Math.random()*colorArray.length)
red=Math.floor(Math.random()*255)
green=Math.floor(Math.random()*255)
blue=Math.floor(Math.random()*255)
    document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')'
},2000)
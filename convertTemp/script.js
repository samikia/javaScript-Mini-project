let $ = document;

const firstValue = $.querySelector(".C");
const secondValue = $.querySelector(".F");
const converter = $.querySelector("#converter");
const result = $.querySelector(".result");
const convertButton = $.querySelector(".convertButton");
const resetButton = $.querySelector(".resetButton");
const changeButton = $.querySelector(".changeButton");

function convert() {
//   console.log("Convert");
  if(converter.value===''){
result.innerHTML='inseart a correct number'
result.style.color="red"
  }else{
if(firstValue.innerHTML==='°C'){
let resultValue= (converter.value*1.8)+32
result.innerHTML=converter.value+'°C to ' + resultValue+'°F'
result.style.color='yellow'
}else{
    let resultValue= (converter.value-32)*5/9
    result.innerHTML=converter.value+'°F to ' + resultValue.toFixed(2)+'°C'  
    result.style.color='yellow'
}
  }
}

function reset() {
//   console.log("Reset");
result.innerHTML=''
converter.value=''
}

function swap() {
  console.log("Change");
  if (firstValue.innerHTML === '°C') {
    firstValue.innerHTML = '°F';
    secondValue.innerHTML = '°C';
    converter.setAttribute('placeholder','°F')
    $.title=' Js | °F to °C'
  } else {
    firstValue.innerHTML = '°C';
    secondValue.innerHTML = '°F';
    converter.setAttribute('placeholder','°C')
    $.title=' Js | °C to °F'
  }

}

convertButton.addEventListener("click", convert);
resetButton.addEventListener("click", reset);
changeButton.addEventListener("click", swap);

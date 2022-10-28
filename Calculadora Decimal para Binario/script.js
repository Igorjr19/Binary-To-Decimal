const valorDecimalElement = document.querySelector("#input-texto");
const converterBotao = document.querySelector("#converter");
const resultP = document.querySelector("#result");

function DecimalToBinario(decimal) {
  var binario = "";
  var temp = decimal;

  while(temp > 0){
      if(temp % 2 == 0){
          binario = "0" + binario;
      }
      else {
          binario = "1" + binario;
      }

      temp = Math.floor(temp / 2);
  }

  return binario;
}

converterBotao.addEventListener("click", (e) => {
  e.preventDefault();

  const valorDecimalValue = valorDecimalElement.value;
  let result = 0;

  if (valorDecimalValue == "0") {
    resultP.innerHTML = `Em Binario: 0`;
  } else {
   result = DecimalToBinario(valorDecimalValue);
    resultP.innerHTML = `Em Binario: ${result}`; 
  }
  console.log(result);
});

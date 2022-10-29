const valorBinarioElement = document.querySelector("#input-texto");
const converterBotao = document.querySelector("#converter");
const resultP = document.querySelector("#result");

///////////////////////////////////////////////////////////////
function isBinary(val) {
  return val.split("").filter((x) => x == "0" || x == "1").length == val.length;
}

function BinaryToDecimal(bin) {
  let decimal = 0;
  for (let i = bin.length - 1; i >= 0; i--) {
    decimal += parseInt(bin[i]) * (Math.pow(2, bin.length - 1 - i));
  }
  return decimal;
}
//////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////
converterBotao.addEventListener("click", (e) => {
  e.preventDefault();

  const valorBinarioValue = valorBinarioElement.value;
  let result = 0;

  if (valorBinarioValue === "" || !isBinary(valorBinarioValue)) {
    resultP.innerHTML = `Digite um número binário válido!`;
  } else {
    result = BinaryToDecimal(valorBinarioValue);
    resultP.innerHTML = `Em Decimal: ${result}`; 
  }
  console.log(result);
});

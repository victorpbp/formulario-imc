function displayValues() {
  let data = JSON.parse(localStorage.getItem('formIMC'))
  document.getElementById("nome").innerHTML = data.nome;
  calculateIMC(data.altura, data.peso);
  return true;
}

function calculateIMC(altura, peso) {
  let imcValue = peso/(altura**2)
  document.getElementById("valor").innerHTML = imcValue;
  return true;
}

displayValues();
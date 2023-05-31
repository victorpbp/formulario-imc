function validateForm() {
  let nome = document.forms["formIMC"]["nome"].value;
  let altura = document.forms["formIMC"]["altura"].value;
  let peso = document.forms["formIMC"]["peso"].value;
  
  if ( nome == "" || altura == "" || peso == "" ) {
    alert("Por favor, preencha todos os campos");
    return false;
  }

  else {
    const data = {nome, altura, peso}
    localStorage.setItem('formIMC', JSON.stringify(data));
    return true;
  }
}
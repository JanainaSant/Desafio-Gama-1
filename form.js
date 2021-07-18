function armazenaDados() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");

    var dados = JSON.parse(localStorage.getItem("dadosUsuario"));
    
    if(dados == null){
        localStorage.setItem("dadosUsuario", "[]");
        dados = [];
    }
   
    var registro = {
        nome: campo1.value,
        email: campo2.value
    }

    dados.push(registro);

    localStorage.setItem("dadosUsuario", JSON.stringify(dados));
    alert("Dados cadastrados com Sucesso :)")

    campo1.value ="";
    campo2.value ="";
}



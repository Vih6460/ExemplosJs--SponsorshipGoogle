function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.querySelector("#txtAno");
    var resultado = document.querySelector("#resultado");

    if(formAno.value == 0 || formAno.value > ano) {
        // alert("Verifique os dados e tente novamente!")
    } else {
        fsex = document.getElementsByName("radSex");
        var idade = ano - formAno.value;
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            genero = "masculino";
            if(idade >= 0 && idade < 12) {
                // criança
                document.body.style.backgroundColor = "#506dff"
                img.setAttribute("src", "./images/crianca_menino.png");
                img.setAttribute("width", "250");
                img.setAttribute("height", "250");
            }else if(idade >= 12 && idade < 18){
                // jovem
                document.body.style.backgroundColor = "#5b5a4f"
                img.setAttribute("src", "./images/jovem_menino.png");
                img.setAttribute("width", "250");
                img.setAttribute("height", "250");
            }else if(idade >= 18 && idade < 50){
                // adulto
                document.body.style.backgroundColor = "pink"
                img.setAttribute("src", "./images/adulto.png");
                img.setAttribute("width", "250");
                img.setAttribute("height", "250");
            }else {
                // idoso 
                document.body.style.backgroundColor = "#d9d9d1"
                img.setAttribute("src", "./images/idoso.png");
                img.setAttribute("width", "250");
                img.setAttribute("height", "250");
            }
        }else {
            genero = "feminino";
            if(idade >= 0 && idade < 12) {
                // criança
                document.body.style.backgroundColor = "#e4dac8"
                img.setAttribute("src", "./images/crianca_menina.png");
                img.setAttribute("width", "250");
                img.setAttribute("height", "250");
            }else if(idade >= 12 && idade < 18){
                // jovem
                document.body.style.backgroundColor = "#d44c70"
                img.setAttribute("src", "./images/jovem_menina.png");
                img.setAttribute("width", "250");
                img.setAttribute("height", "250");
            }else if(idade >= 18 && idade < 50){
                // adulta
                document.body.style.backgroundColor = "#83464b"
                img.setAttribute("src", "./images/adulta.png");
                img.setAttribute("width", "250");
                img.setAttribute("height", "250");
            }else {
                // idosa
                document.body.style.backgroundColor = "gray"
                img.setAttribute("src", "./images/idosa.png");
                img.setAttribute("width", "250");
                img.setAttribute("height", "250");
            }
        }

        resultado.style.textAlign = "center";
        resultado.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}
function verifica() {
    let foto = document.querySelector("#imagem");
    var hora = document.querySelector("#inputHora");

    if (hora.value >=6 && hora.value < 12) {
        foto.src = "./images/manha.png";
        document.body.style.backgroundColor = "#cddce6";

    }else if (hora.value >= 12 && hora.value < 18) {
        foto.src = "./images/tarde.png";
        document.body.style.backgroundColor = "#6a4b36";
    }else {
        foto.src = "./images/noite.png";
        document.body.style.backgroundColor = "#1f212a";
    }

    hora.value = "";
}
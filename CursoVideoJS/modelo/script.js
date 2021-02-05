function carregar() {
    var msg = document.querySelector('#msg');
    var img = document.querySelector('#imagem');
    var data = new Date();
    // var hora = data.getHours();
    var hora = 10;
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        img.src = "../ex14/images/manha.png"
        document.body.style.backgroundColor ="#ccdae3"
    }else if(hora >= 12 && hora < 18) {
        img.src = "../ex14/images/tarde.png"
        document.body.style.backgroundColor ="#e6982b"
    }else {
        img.src = "../ex14/images/noite.png"
        document.body.style.backgroundColor ="#191b22"
    }
}
let n = document.querySelector("#numeroDigitado");
let valores = [];
let tabela = document.querySelector("#tabela");
let res = document.querySelector("#res");

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true;
    }
}

function inLista(n, lista) {
    if(lista.indexOf(Number(n)) != -1){
        return true;
    }
}

function adiciona(){
    if(isNumero(n.value) && !inLista(n.value, valores)) {
        valores.push(Number(n.value));
        let item = document.createElement("option");
        item.text = `Valor ${(n.value)} adicionado`;
        tabela.appendChild(item);
        res.innerHTML = "";
    } else {
       alert("Valor inválido ou já encontrado na lista.");
    }
    
    n.value = "";
    n.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adcione valores antes de finalizar");
    } else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }
        
        media = soma / total;
        res.innerHTML = "";
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor é ${maior}</p>`
        res.innerHTML += `<p>O menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`

    }
}
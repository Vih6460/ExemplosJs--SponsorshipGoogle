// Converter em moeda
// let n = 1549.5
// n.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
// console.log(n);

let amigo = {
    nome: "Vinicius",
    sexo: "M",
    peso: 90.0,
    engordar(p=0){
        console.log("Engordou")
        this.peso += p
    }
}
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}kg`);
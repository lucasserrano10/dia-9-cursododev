// PEGANDO INFORMAÇÕES DOS FUNCIONÁRIOS DO BANCO 
let nome = prompt("Nome :")
let idade = Number(prompt("Idade:"))
let salario = Number(prompt("Salário :"))

console.log("Sr/Sra"+ "." + nome + "cuja a idade é" + ">"+ idade + "<" + "Seu salario atual é " + ":" + salario)

console.log("------------------------------------------------------------")

let confirmar = prompt("As informações estão corretas ? (sim/não) ")

if(confirmar == "não"){
    let nome = prompt("Nome :")
let idade = Number(prompt("Idade:"))
let salario = Number(prompt("Salário :"))
}else{
    console.log("vamos prosseguir ...")
}

console.log("------------------------------------------------------------")

console.log("previsão salarial para os proximos 10 anos")

let contador = 1
let porcentagem = 0.015

for(contador = 1;contador <= 11; contador++ ){
  salario = salario + salario * porcentagem
  aumento = porcentagem * 2
console.log((2023 + contador)+ "-" + "R$" + salario)
}
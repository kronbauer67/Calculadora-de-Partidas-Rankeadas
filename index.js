let vitoria = 1
for (let i = 0; i <= 120; i++){
    vitoria +=1
    console.log("você ganhou  " + i + " partidas")
}
let derrota =1
for (let i = 0; i <= 10; i++){
    derrota +=1
    console.log("você perdeu " + i + " partidas" )
}
calcularRanke(vitoria, derrota)
function calcularRanke (vitoria,derrota){
    let partida = vitoria - derrota;
    //console.log("resultado " + partida)
if (partida <10){
    console.log("o heroi tem saldo de " + partida + " esta no nivel ferro")
}else if (partida <21 ){
    console.log("o heroi tem saldo de " + partida + " esta no nivel bronze")
}else if (partida <51){
    console.log("o heroi tem saldo de " + partida + " esta no nivel prata")
}else if (partida <81){
    console.log("o heroi tem saldo de " + partida + " esta no nivel ouro")
}else if(partida <91){
    console.log("o heroi tem saldo de " + partida + " esta no nivel diamante")
}else if (partida <101){
    console.log("o heroi tem saldo de " + partida + " esta no nivel lendario")
}
else{
    console.log("o heroi tem saldo de " + partida + " esta no nivel imortal")
}
}
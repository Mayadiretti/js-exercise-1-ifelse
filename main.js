/*const user = prompt('inserire un numero da 1 a 10');
const userNumber = Number(user);
let multiplyVal = 1;
while(multiplyVal<=10){
    console.log(userNumber + 'x' + multiplyVal + '=' + multiplyresult);
    multiplyVal++;
}

//sostitutore di parole//
let domandaUtente = prompt('scrivi una domanda');
let CreaParole = prompt('parola per rispondere');
let nuovaParola = prompt('nuova parola da usare');
domandaUtente = domandaUtente.replaceAll(CreaParola, nuovaParola)
console.log(domandaUtente);


//validatore di siti//
let userUrl = prompt('iserisci un URL')
if(userUrl.startsWith("http://") || userUrl.startsWith("https://") && userUrl.endsWith(".com")){
    console.log("URL valido")
}else {
    console.log("non è un URL valido")*/



//esercizio 'cinema'
/*
let userQuestion = prompt('how old are you?');

if(userQuestion < 13){
    alert('potete vedere solo film con classificazione PG');
}else if(userQuestion > 13 && userQuestion < 17){
    alert('potete vedere film con classificazione PG e PG-13');
} else {
    alert('potete vedere tutti i film');
}
*/

//esercizio Calcolatore di Sconti
/*
let user = prompt('quanto viene questo articolo e la sua percentuale di sconto?')
let sconto = ;
if(sconto > 50){
    alert('è un ottimo sconto')
} else {
    alert('è un normale sconto')
}
*/

//esercizio calcolo BMI
let userPeso = prompt('quanto pesi (in Kg)?');
let numeroPeso = parseInt(userPeso);
let userAltezza = prompt('quanto sei alto? (in metri)');
let numeroAltezza = parseInt(userAltezza);
let bmi = numeroPeso/(numeroAltezza * numeroAltezza);
if(bmi < 18.5){
    alert('sei sottopeso');
} else if(bmi>18.5 && bmi<24.9){
    alert('hai un peso normale');
} else{
    alert('sei sovrappeso');
}

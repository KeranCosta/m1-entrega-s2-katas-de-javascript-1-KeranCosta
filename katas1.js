function oneThroughTwenty() {
    
    for (let numero = 1; numero <= 20; numero++) {
      console.log(numero);
      
     }
}
console.log("chamando a função oneThroughTwenty")
oneThroughTwenty();



function evensToTwenty() {
    for (let numero = 1; numero <= 20; numero++){
      if(numero%2 == 0){
        console.log(numero);
      }
    }
}
console.log("\nchamando a função evensToTwenty")
evensToTwenty();




function oddsToTwenty() {
  for (let numero = 1; numero <= 20; numero++){
    if(numero%2 != 0){
      console.log(numero);
    }
  }
}
console.log("\nchamando a função oddsToTwenty")
oddsToTwenty();




function multiplesOfFive() {
  for (let numero = 5; numero <= 100; numero++){  
    if(numero%5 == 0){
      console.log(numero);
    }
  }
}
console.log("\nchamando a função multiplesOfFive")
multiplesOfFive();





function squareNumbers() {
  
  for (let numero = 1; numero*numero <= 100; numero++){
    let raizQuadrada = numero*numero;
    if (raizQuadrada% 1 == 0 ) {
      console.log(raizQuadrada);
    }
  }
}
console.log("\nchamando a função squareNumbers")
squareNumbers();




function countingBackwards() {
   let arrayNumero = [];
      
      for (let numero = 1; numero <= 20; numero++) {
        arrayNumero.push(numero);
      }
      for (let i=19; i>=0 ; i--){
        console.log(arrayNumero[i]);
      }
}
console.log("\nchamando a função countingBackwards")
countingBackwards();




function evenNumbersBackwards() {
    let arrayNumero = [];
        
      for (let numero = 1; numero <= 20; numero++) {
        arrayNumero.push(numero);
      }
      for (let i=19; i>=0 ; i--){
        if(arrayNumero[i]%2 == 0){
        console.log(arrayNumero[i]);
        }
      }
}
console.log("\nchamando a função evenNumbersBackwards")
evenNumbersBackwards();



function oddNumbersBackwards() {
  let arrayNumero = [];
        
    for (let numero = 1; numero <= 20; numero++) {
      arrayNumero.push(numero);
    }
    for (let i=19; i>=0 ; i--){
      if(arrayNumero[i]%2 != 0){
      console.log(arrayNumero[i]);
      }
    }
}
console.log("\nchamando a função oddNumbersBackwards")
oddNumbersBackwards();



function multiplesOfFiveBackwards() {
  let arrayNumero = [];
        
  for (let numero = 5; numero <= 100; numero++) {
    arrayNumero.push(numero);
  }
  for (let i=99; i>=0 ; i--){
    if(arrayNumero[i]%5 == 0){
    console.log(arrayNumero[i]);
    }
  }
}
console.log("\nchamando a função multiplesOfFiveBackwards")
multiplesOfFiveBackwards();


function squareNumbersBackwards() {
  let arrayNumero = [];
        
  for (let numero = 1; numero <= 100; numero++) {
    arrayNumero.push(numero);
  }
  for (let i=99; i>=0 ; i--){
    let raizQuadrada = arrayNumero[i]*arrayNumero[i];
    if(raizQuadrada% 1 == 0 && raizQuadrada <=100){
     console.log(raizQuadrada);
    }
  }
}
console.log("\nchamando a função squareNumbersBackwards")
squareNumbersBackwards();




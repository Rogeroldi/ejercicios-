let name = prompt("¿Cual es tu nombre?");
let age = parseInt(prompt("¿Cúal es tú edad?"));
//convirtiendo edad en segundos
let ageInSeconds = age * 365 * 24 * 3600;
//mostrando la edad en segundos en la web
document.write("Hola " + name + " Tú edad es " + age + " años" + " y en segundos es " + ageInSeconds);
//preguntando la temperatura en celsius
let temperature = parseInt(prompt("¿Cúal es la temperatura en grados celsius?"));
// convirtiendo la temperatura a farenheit
let convertToFarenheit = temperature*1.8+32;
// mostrando el resultado de la conversión
document.write("La temperatura en farenheit es " +convertToFarenheit);
// ingresos
let income = parseInt(prompt("¿Cuanto es el ingreso?"));
// costos
let costs = parseInt(prompt("¿Cuanto es el costo?"));
// impuestos
let taxPercent = parseInt(prompt("¿Cunto es el impuesto?"));
//ganancia bruta
let grossProfit = income-costs;
//cantidad de impuestos
let tax = grossProfit*taxPercent/100;
//ganancia neta
let netIncome = grossProfit-tax;
//mostrando ganancia neta
document.write("tu ganancia neta es $ " + netIncome);
//preguntando nombre y apellido
let nameLastName = prompt("¿Cual es tu nombre y apellido");
//inicial del nombre
let firstInitial = nameLastName.slice(0,1);
// buscando la posicion del espaciado e  inicial del apellido
let secondInitialPosition = nameLastName.indexOf(" ") + 1;
let secondInitial = nameLastName.slice(secondInitialPosition,secondInitialPosition+1);
document.write("tus iniciales son " + firstInitial + secondInitial );

//ejercicio de switch
//let answer = prompt("¿como te sientes?");
//switch(answer) {
 //   case "feliz":
 //       alert("Sigue siendo feliz");
  //      break;
  //   case "triste":
    //     alert("Todo pasa,nada es eterno");
      //   break;
        // default;
         a//lert("tu estado emocional es complicado");

//}
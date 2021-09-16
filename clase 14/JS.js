/*
parseInt(1353553) // para que las palabras sean numero, porque todas la variables son de tipo texto
var primerNumero = prompt("Ingrese el primer numero");
var segundoNumero = prompt("ingrese el segundo numero");
var resultado = parseInt("primerNumero") + parseInt("segundoNumero");
if(resultado == NaN){
    alert("Tenes que ingresar numeros no palabras")
}
else{
    alert("Tu resultado es: "+ resultado);
}

miPrimerBooleano = True; // Esto significa que esta variable es igual a 1
otroBooleano = False; // Esto significa que es igual a 0
*/

//Ejercitacion 0
/*Solicitar al usuario su nombre y mostrarlo por consola. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por consola con el nombre completo*/
var userNombre = prompt("Ingrese su nombre");
console.log("userNombre");
alert("Hola"+ " " + userNombre);
var userApellido = prompt("Ingrese su apellido");
console.log("Hola"+ " "+ userNombre + " "+ userApellido);


//Ejercitacion 1 Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos.
let num1 = prompt("Ingrese el primer numero");
num1 = parseInt(num1);
let num2 = prompt("Ingrese el segundo numero");
num2 = parseInt(num2);
let suma = num1 + num2;
console.log("Tu resultado es: " + suma);


//Ejercitacion 2 Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por consola
let edad = window.prompt("Ingrese su edad actual");
let nacimiento = 2021 - edad;
console.log("Usted nacio en " + nacimiento);


// Ejercitacion 3 Mostrar al usuario su balance de cuenta (Numero asignado por nosotros).Consultar cuánto dinero desea retirar y mostrar el nuevo balance.
let balance = 4000;
alert("Su balance actual es de: "+ balance);
let retiro = window.prompt("Cuanto desea retirar?");
let balanceNovo = balance - retiro;
alert("Su balance actual es de: "+ balanceNovo);


// Ejercitacion 4 Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por consola.
let nota1 = window.prompt("Ingrese la primer nota");
nota1 = parseInt(nota1);
let nota2 = window.prompt("Ingrese la segunda nota");
nota2 = parseInt(nota2);
let nota3 = window.prompt("Ingrese la tercer nota");
nota3 = parseInt(nota3);
let promedio = (nota1 + nota2 + nota3)/3;
console.log("Su promedio es " + promedio);


//Ejercitacion 5 Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centimetros y pulgadas. Mostrar por consola los tres resultados.
let mtros = window.prompt("Ingrese una medida en metros");
let ps;
let cm;
let plgd;
cm = parseInt(mtros)*100;
ps= parseInt(cm)/40;
plgd = parseInt(ps) / 2,54;
console.log("Sus medidas son: "+ "en pies: "+ ps +" " +" en centimetro: "+ cm + " "+ "en pulgada: "+plgd);


//Ejercitacion 6 Solicitar al usuario dos números y mostrar el resultado de la suma. Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.
let n1 = window.prompt("Ingrese el primer numero");
n1 = parseInt(n1);
let n2 = window.prompt("Ingrese el segundo numero");
n2 = parseInt(n2);
let sum1 = n1 + n2;
alert("El resultado de la suma es: " + sum1);
let n3 = window.prompt("Ingrese el tercer numero");
n3 = parseInt(n3);
let resultado = sum1 * n3;
alert("El resultado final es: "+ resultado);


//Ejercitacion 7 Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.
let minute = window.prompt("Ingrese los minutos a convertir");
let second;
second = parseInt(minute)*60;
alert("Los minutos equivalen a: "+ second + "segundos");


//Ejercitacion 8 Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.
let base = window.prompt("Ingrese la base del rectangulo");
base = parseInt(base);
let height = window.prompt("Ingrese la altura del rectangulo");
height = parseInt(height);
let area;
area = base* height;
alert("El area del rectangulo es: "+ area);


//Ejercitacion 9 Solicitar al usuario la medida de la base y de la altura de un triángulo equilatero y devolver el área.
let base2 = window.prompt("Ingrese la base del triangulo");
base2 = parseInt(base2);
let altura = window.prompt("Ingrese la altura del triangulo");
altura = parseInt(altura);
let area2;
area2 = base2*(altura/2);
alert("El area del triangulo equilatero es: "+ area);


//Ejercitacion 10 Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.
let monto = window.prompt("Ingrese el monto deseado");
monto = parseInt(monto);
let descuento = window.prompt("Ingrese su descuento");
descuento = parseInt(descuento);
let precioFinal = monto - descuento;
alert("Su precio final con descuento aplicado es de: "+precioFinal);


//Ejercitacion 11 Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo "Hola (nombre) usted nació en el año (año)"
let nombreUser = window.prompt("Ingrese su nombre");
let year = window.prompt("Ingrese su edad cumplida en este año");
year = parseInt(year);
let birth = 2021 - year;
alert("Hola "+ nombreUser+ ", usted nació en el año "+ birth);


//Ejercitacion 12 Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura y mostrar por consola su equivalente en Farenheit junto con un mensaje que incluya ambos datos.
let nombre = window.prompt("Ingrese su nombre");
let Celsius = window.prompt("Ingrese un valor en grados celsius");
Celsius = parseFloat(Celsius);
let Farenheit;
Farenheit = Celsius *(9/5) + 32;
alert(nombre+ "su temperatura en farenheit es: "+Farenheit);


//Ejercitacion 13 Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius
let name = window.prompt("Ingrese su nombre");
let Farenheit2 = window.prompt("Ingrese un valor en grados celsius");
Farenheit2 = parseFloat(Farenheit2);
let Celsius2;
Celsius2 = (Farenheit2 - 32) * (5/9);
alert(nombre+ "su temperatura en Celsius es: "+ Celsius2);


//Ejercitacion 14 Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10 y sacar el resto de su división por 3. Mostrar el resultado sin comas.
let number = window.prompt("Ingrese un numero");
number = parseInt(number);
let suma3;
let multiplicacion;
let resto;
suma3 = number + 5;
multiplicacion = suma3 * 10;
resto = multiplicacion % 3;
alert(Math.round(resto));


//Bonus Ejercitacion
//Ejercitacion 0 Solicitar dos números y mostrar la suma de sus cifras.
let numero1 = window.prompt("Ingrese un numero");
let numero2 = window.prompt("Ingrese otro numero");
alert(numero1 + numero2);
//Ejercicacion 1 Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y mostrar su equivalente en segundos por consola o alert, a elección. (Pueden probar también con números con coma :) 2,5 años por ejemplo)
let anios = window.prompt("Ingrese la cantidad de años");
anios = parseFloat(anios);
let horas;
let segundos;
horas = (anios * 365)*24;
segundos = (horas *60)* 60;
console.log("Su cantidad de años equivalen a: "+ segundos +" segundos");
//Ejercitacion 2 Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: la velocidad se calcula en metros sobre segundos!)
let klm = window.prompt("Ingrese la cantidad de kilómetros que desea recorrer con su motocicleta");
klm = parseInt(klm);
let vlc = window.prompt("Ingrese a la velocidad que desea ir");
vlc= parseInt(vlc);
let metro;
let time;
metro = klm * 1000;
vlc = vlc * (5/18);
time = (metro / vlc)/60;
alert("Ustes va a tardar en llegar: "+ time + " minutos");

//Ejercitacion 3 Realizar una calculadora de sueldo neto. Se solicita ingresar el sueldo bruto y se descuenta: Obra social 3%, jubilación 11%, Ley 19032 3%. Mostrar el monto de cada una de las deducciones y el monto final. No contempla impuesto a las ganancias ni sindicatos.
/*ej: Sueldo bruto: $70.000
Deducciones:
Obra social: $2100
Ley 19032: $2100
Jubilación: $7700
Neto a pagar: $58100
*/
let SBruto = window.prompt("Ingrese su sueldo bruto");
SBruto = parseInt(SBruto);
let OSocial;
let ley;
let jubilacion;
let neto;
OSocial = (SBruto * 3)/100;
alert("Se reduce "+ OSocial +" de la obra social");
jubilacion =(SBruto*11)/100;
alert("Se reduce "+ jubilacion +" de la jubilacion");
ley =(SBruto*3)/100;
alert("Se reduce "+ley+" de la ley 19032");
neto= SBruto - OSocial - ley - jubilacion;
alert("Su sueldo neto total es: "+neto);




// variables globales
let operacion = null;
let numero1 = 0;
let numero2 = 0;
let resultado = 0.0;
let texto = document.getElementById("texto");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");
let btnPunto = document.getElementById("btnPunto");
let btnReinicio = document.getElementById("btnReinicio");
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMulti = document.getElementById("btnMulti");
let btnDivision = document.getElementById("btnDivision");
let btnPotencia = document.getElementById("btnPotencia");
let btnRaiz = document.getElementById("btnRaiz");
let btnEnter = document.getElementById("btnEnter");

const fn1 = () => {
  texto.innerHTML += "1";
};
const fn2 = () => {
  texto.innerHTML += "2";
};

const fn3 = () => {
  texto.innerHTML += "3";
};

const fn4 = () => {
  texto.innerHTML += "4";
};

const fn5 = () => {
  texto.innerHTML += "5";
};

const fn6 = () => {
  texto.innerHTML += "6";
};

const fn7 = () => {
  texto.innerHTML += "7";
};
const fn8 = () => {
  texto.innerHTML += "8";
};
const fn9 = () => {
  texto.innerHTML += "9";
};
const fn0 = () => {
  texto.innerHTML += "0";
};
const fnPunto = () => {
  texto.innerHTML += ".";
};
const fnSuma = () => {
  numero1 = parseFloat(texto.textContent);
  texto.innerHTML = "";
  operacion = "suma";
};
const fnResta = () => {
  numero1 = parseFloat(texto.textContent);
  texto.innerHTML = "";
  operacion = "resta";
};

const fnMulti = () => {
  numero1 = parseFloat(texto.textContent);
  texto.innerHTML = "";
  operacion = "multi";
};

const fnDivision = () => {
  numero1 = parseFloat(texto.textContent);
  texto.innerHTML = "";
  operacion = "div";
};

const fnRaiz = () => {
  numero1 = parseFloat(texto.textContent);
  texto.innerHTML = "";
  operacion = "raiz";
};

const fnPotencia= () => {
  numero1 = parseFloat(texto.textContent);
  texto.innerHTML = "";
  operacion = "potencia";
};

const fnReinicio = () => {
  texto.innerHTML = "";
};

const fnEnter = () => {
  console.log(texto.textContent);
  numero2 = parseFloat(texto.textContent);
  if (operacion == "suma"){
    resultado = numero1 + numero2;
    texto.innerHTML = resultado;
  }
  else if (operacion == "resta") {
    resultado = numero1 - numero2;
    texto.innerHTML = resultado;
  }
  else if (operacion == "multi") {
    resultado = numero1 * numero2;
    texto.innerHTML = resultado;
  }
  else if (operacion == "multi") {
    resultado = numero1 * numero2;
    texto.innerHTML = resultado;
  }
  else if (operacion == "div") {
    if (numero2 == 0){
      texto.innerHTML = "--Syntax Error--";
    }
    else{
      resultado = numero1 / numero2;
      texto.innerHTML = resultado;
    }
  }
  else if (operacion == "potencia") {
    resultado = Math.pow(numero1,numero2);
    texto.innerHTML = resultado;
  }
  else if (operacion == "raiz") {
    resultado = Math.sqrt(numero1);
    texto.innerHTML = resultado;
  }


};

//Eventos
btn1.onclick = function () {
  fn1();
};
btn2.onclick = function () {
  fn2();
};

btn3.onclick = function () {
  fn3();
};

btn4.onclick = function () {
  fn4();
};

btn5.onclick = function () {
  fn5();
};

btn6.onclick = function () {
  fn6();
};

btn7.onclick = function () {
  fn7();
};

btn8.onclick = function () {
  fn8();
};

btn9.onclick = function () {
  fn9();
};
btn0.onclick = function () {
  fn0();
};
btnPunto.onclick = function () {
  fnPunto();
};

btnSuma.onclick = function () {
  fnSuma();
};

btnResta.onclick = function () {
  fnResta();
};

btnMulti.onclick = function () {
  fnMulti();
};

btnDivision.onclick = function () {
  fnDivision();
};

btnPotencia.onclick = function () {
  fnPotencia();
};

btnRaiz.onclick = function () {
  fnRaiz();
};

btnReinicio.onclick = function () {
  fnReinicio();
};

btnEnter.onclick = function () {
  fnEnter();
};

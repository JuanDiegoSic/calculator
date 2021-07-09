// variables globales

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
let btnSuma = document.getElementById("btnSuma");
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
const fnSuma = () => {
    texto.innerHTML += "+";
  };

const fnEnter = () => {
  
    resultado = parseFloat(texto.textContent)
    console.log(resultado);
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

btnSuma.onclick = function () {
    fnSuma();
  };

btnEnter.onclick = function () {
    console.log(texto.innerHTML);
  fnEnter();
  
};


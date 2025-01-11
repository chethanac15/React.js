//new file.js
function add (n1,n2) {
  return n1+n2;
}
function multiply (n1,n2) {
  return n1*n2;
}
function subtract (n1,n2) {
  return n1-n2;
}
function divide (n1,n2) {
  return n1/n2;
}
export {add,multiply,subtract,divide};


//index.js
import React from "react";
import ReactDOM from "react-dom";
import * as Calculator from "./calculator";
<ul>
  <li>{Calculator.add(1,2)}</li>
  <li>{Calculator.multiply(2,3)}</li>
  <li>{Calculator.subtract(7,2)}</li>
  <li>{Calculator.divide(5,2)}</li>
</ul>,
documnet.getElementById("root")
);

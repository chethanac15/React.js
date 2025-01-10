//in math.js
const pi=3.14;
function doublePi() {
  return pi*2;
}
function triplePi() {
  return pi*3;
}
export default pi;
export {doublePi,triplePi}

//in index.js

import React from "react";
import ReactDOM from "react-dom";
import PI,{doublePi, triplePi} from "./math.js";
ReactDOM.render (
  <ul>
  <li>(PI)</li>
  <li>{doublePi()}</li>
  <li>{triplePi()}</li>
  </ul>,
document.getElementById("root")
);

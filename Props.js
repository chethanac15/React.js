import React from "react";
import ReactDOM from "react-dom";
function card (props) {
  return (
    <div>
         <h2>{props.name}</h2>
         <img src={props.img} alt=""/>
         <p>{props.tel}</p>
   </div>
  );
}
ReactDOM.render (
  <div>
       <h1>My contacts</h1>
  <card
       name=""
       img=""
       tel=""
       email=""
/>
</div>,
document.getElementById("root")
);

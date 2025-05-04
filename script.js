
let btns = document.querySelectorAll('.Moye button');
let input = document.querySelector('.display input');
let input2 = document.querySelector('.display .Ans')


btns.forEach(button => {
  button.addEventListener("click", () => {
    
    input.value += button.innerText;
  });
});
function ClearAll() {
  input.value="";
  input2.value ="";
}
function RemoveOne() {
  input.value = input.value.toString().slice(0,-1);
}
function Equal() {
  if(input.value.includes('^')
  ){
    let express = input.value.replace(/\^/g,'**')
    input2.value =eval(express);
    
  }
 
  else  if (input.value !==''){
input2.value= parseFloat(eval(input.value));
   
  }

else{
  alert("Do some calculation ");
}
}
function Add() {
  if(input.value !==''){
    input.value += "+";
    
      return;
    }
    else {
      alert("Pls Enter a Numebr First");
    }


}
function Sub() {
   if(input.value !==''){
    input.value += "-";
    return;
    }
    else {
      alert("Pls Enter a Numebr First");
    }
}
function Mul(){
 if (input.value !== '') {
   input.value += "*";
   return;
 }
 else {
  alert("Pls Enter a Numebr First");
}
  
}
function Div() {
 if (input.value !== '') {
   input.value += "/";
   return;
 }
 else {
  alert("Pls Enter a Numebr First");
}
}
function Mod(){
  if (input.value !== '') {
   input2.value += parseFloat(input.value)/100;
   return;
 } 
 else {
  alert("Pls Enter a Numebr First");
}
  
}
function Power() {
  input.value += "^"
  
}
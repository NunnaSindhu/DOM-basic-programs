function add(){

let output=document.getElementById("dropdownlist");
let addCountry=document.createElement("option");
addCountry.text=document.getElementById("text").value;
output.append(addCountry);

}
let output=document.getElementById("submit");
output.addEventListener("click",function (){
    let word=document.getElementById("text").value;
document.getElementById("display").innerHTML=`<h1>Word Length is:${word.length}</h1>`;;

});

let y = Math.floor(Math.random() * 10 + 1);
let guess=1;
console.log(y);
let submit = document.getElementById("submitGuess");
submit.addEventListener("click",function () {
  let x = document.getElementById("text").value;
  if (x==y) {
   alert(`Congratulations you guess the correct number with guesscount of ${guess}  `);
  } else if (x > y) {
    alert(`Sorry!! Enter the small number`);
    guess++;
  } else if(x < y){
    alert(`Sorry!! enter the larger number`);
    guess++;
  }
});

document.getElementById("color1").addEventListener("mouseover",function () {
    document.getElementById("display").innerHTML="Red";
    document.getElementById("display").style.backgroundColor = "red";
    document.getElementById("display").style.width="50%";
});
document.getElementById("color1").addEventListener("mouseout",function(){
    document.getElementById("display").innerHTML="";
    document.getElementById("display").style.backgroundColor = "white";
});
document.getElementById("color2").addEventListener("mouseover",function () {
    document.getElementById("display").innerHTML="blue";
    document.getElementById("display").style.backgroundColor = "blue";
    document.getElementById("display").style.width="50%";

});
document.getElementById("color2").addEventListener("mouseout",function(){
    document.getElementById("display").innerHTML="";
    document.getElementById("display").style.backgroundColor = "white";
});

document.getElementById("color3").addEventListener("mouseover",function () {
    document.getElementById("display").innerHTML="orange";
    document.getElementById("display").style.backgroundColor = "orange";
    document.getElementById("display").style.width="50%";
});
document.getElementById("color3").addEventListener("mouseout",function(){
    document.getElementById("display").innerHTML="";
    document.getElementById("display").style.backgroundColor = "white";
});

document.getElementById("color4").addEventListener("mouseover",function () {
    document.getElementById("display").innerHTML="Green";
    document.getElementById("display").style.backgroundColor = "green";
    document.getElementById("display").style.width="50%";
});
document.getElementById("color4").addEventListener("mouseout",function(){
    document.getElementById("display").innerHTML="";
    document.getElementById("display").style.backgroundColor = "white";
});

document.getElementById("color5").addEventListener("mouseover",function () {
    document.getElementById("display").innerHTML="Yellow";
    document.getElementById("display").style.backgroundColor = "yellow";
    document.getElementById("display").style.width="50%";
});
document.getElementById("color5").addEventListener("mouseout",function(){
    document.getElementById("display").innerHTML="";
    document.getElementById("display").style.backgroundColor = "white";
});

document.getElementById("color6").addEventListener("mouseover",function () {
    document.getElementById("display").innerHTML="violet";
    document.getElementById("display").style.backgroundColor = "violet";
    document.getElementById("display").style.width="50%";
});
document.getElementById("color6").addEventListener("mouseout",function(){
    document.getElementById("display").innerHTML="";
    document.getElementById("display").style.backgroundColor = "white";
});

document.getElementById("color7").addEventListener("mouseover",function () {
    document.getElementById("display").innerHTML="Lavender";
    document.getElementById("display").style.backgroundColor = "lavender";
    document.getElementById("display").style.width="50%";
});
document.getElementById("color7").addEventListener("mouseout",function(){
    document.getElementById("display").innerHTML="";
    document.getElementById("display").style.backgroundColor = "white";
});


document.getElementById("add").addEventListener("click", function () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  document.getElementById("output").innerHTML = `Addition is:${parseInt(num1) + parseInt(num2)}`;
});
document.getElementById("sub").addEventListener("click", function () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  document.getElementById("output").innerHTML = `Subtraction is:${parseInt(num1) - parseInt(num2)}`;
});
document.getElementById("mul").addEventListener("click", function () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  document.getElementById("output").innerHTML = `Multiplication is:${parseInt(num1) * parseInt(num2)}`;
});
document.getElementById("div").addEventListener("click", function () {
  let num1 = document.getElementById("number1").value;
  let num2 = document.getElementById("number2").value;
  document.getElementById("output").innerHTML = `Division is:${parseInt(num1) / parseInt(num2)}`;
});

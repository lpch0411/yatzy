let images = ["../dice-1.png",
"../dice-2.png",
"../dice-3.png",
"../dice-4.png",
"../dice-5.png",
"../dice-6.png"];
let dice = document.querySelectorAll("img");

document.querySelector("#die-1").setAttribute("src", images[0]);
document.querySelector("#die-2").setAttribute("src", images[0]);
document.querySelector("#die-3").setAttribute("src", images[0]);
document.querySelector("#die-4").setAttribute("src", images[0]);
document.querySelector("#die-5").setAttribute("src", images[0]);
       
function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
    dice.forEach(function(die){
        die.classList.remove("shake");
    });
    const obj1 = {value: Math.floor(Math.random()*6) +1};
    const obj2 = {value: Math.floor(Math.random()*6) +1};
    const obj3 = {value: Math.floor(Math.random()*6) +1};
    const obj4 = {value: Math.floor(Math.random()*6) +1};
    const obj5 = {value: Math.floor(Math.random()*6) +1};

    
    let valuearray = [obj1.value,obj2.value,obj3.value,obj4.value,obj5.value]
    
    console.log(obj1.value,obj2.value,obj3.value,obj4.value,obj5.value);
    document.querySelector("#die-1").setAttribute("src", images[valuearray[0] -1]);
    document.querySelector("#die-2").setAttribute("src", images[valuearray[1] -1]);
    document.querySelector("#die-3").setAttribute("src", images[valuearray[2] -1]);
    document.querySelector("#die-4").setAttribute("src", images[valuearray[3] -1]);
    document.querySelector("#die-5").setAttribute("src", images[valuearray[4] -1]);
  
},
    1000
    )
};

//click to create shadow for each cube
let die1 = document.querySelector("#die-1");
die1.addEventListener("click",function handleClick(event) {
    event.target.classList.toggle('hold');
    });
let die2 = document.querySelector("#die-2");
die2.addEventListener("click",function handleClick(event) {
      event.target.classList.toggle('hold');
    });
let die3 = document.querySelector("#die-3");
die3.addEventListener("click",function handleClick(event) {
      event.target.classList.toggle('hold');
    });
let die4 = document.querySelector("#die-4");
die4.addEventListener("click",function handleClick(event) {
      event.target.classList.toggle('hold');
    });
let die5 = document.querySelector("#die-5");
die5.addEventListener("click",function handleClick(event) {
      event.target.classList.toggle('hold');
    });

let objarray= [die1,die2,die3,die4,die5];

//still incomplete function
function hold(){
    Object.seal(objarray[1]);
};
hold();

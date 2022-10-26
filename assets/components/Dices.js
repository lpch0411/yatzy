let rollcounter = 3;

let images = ["../dice-1.png",
"../dice-2.png",
"../dice-3.png",
"../dice-4.png",
"../dice-5.png",
"../dice-6.png"];



const dice = [

   {value: 1, hold: false, image: document.querySelector("#die1") },
   {value: 1, hold: false, image: document.querySelector("#die2")},
  {value: 1, hold: false, image: document.querySelector("#die3")},
   {value: 1, hold: false, image: document.querySelector("#die4")},
   {value: 1, hold: false, image: document.querySelector("#die5")}
];
     
dice.forEach(function(die){
		
   die.image.setAttribute("src", images[die.value -1]);
   die.image.addEventListener("click",function handleClick(event) {
	   if (rollcounter != 0) {
    event.target.classList.toggle('hold');
	die.hold = !die.hold;
	console.log(die.value, die.hold);
	   };
    });

	  });
	  
function rolldice(){
    dice.forEach(function(die){
        if (!die.hold) {
		die.image.classList.add("shake");
		die.value = Math.floor(Math.random()*6) +1;		};
    });
    setTimeout(function(){ 
    dice.forEach(function(die){
		if (!die.hold) {
        die.image.classList.remove("shake"); };
    });
	
	  dice.forEach(function(die){
		if (!die.hold) {
    
   die.image.setAttribute("src", images[die.value -1]);
	  };
	  });
  
},
    1000
    )
};
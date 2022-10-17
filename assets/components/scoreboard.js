//cubes (will be taken from dices later)
let die1 = 1;
let die2 = 6;
let die3 = 6;
let die4 = 5;
let die5 = 6;



// Scoring holders
let aces = 0;
let twos = 0;
let threes = 0;
let fours = 0;
let fives = 0;
let sixes = 0;
let bonus35 = 0;
let bonuslowerboolean = false;
let uppertotal = 0;
let ofakind3 = 0;
let ofakind4 = 0;
let fullhouse = 0;
let smallstr = 0;
let largestr = 0;
let yahtzee = 0;
let chance = 0;
let bonusyahtzee = 0;
let lowertotal = 0;
let totaltotal = 0;

// Scoring display
let acesscore = document.getElementById("aces");
let twosscore = document.getElementById("twos");
let threesscore = document.getElementById("threes");
let foursscore = document.getElementById("fours");
let fivesscore = document.getElementById("fives");
let sixesscore = document.getElementById("sixes");
let bonus35score = document.getElementById("bonus35");
let uppertotalscore = document.getElementById("uppertotal");
let ofakind3score = document.getElementById("ofakind3");
let ofakind4score = document.getElementById("ofakind4");
let fullhousescore = document.getElementById("fullhouse");
let smallstrscore = document.getElementById("smallstr");
let largestrscore = document.getElementById("largestr");
let yahtzeescore = document.getElementById("yahtzee");
let chancescore = document.getElementById("chance");
let bonusyahtzeescore = document.getElementById("bonusyahtzee");
let lowertotalscore = document.getElementById("lowertotal");
let totaltotalscore = document.getElementById("totaltotal");

// Make an array with the dices score
var dicesScores = [die1, die2, die3, die4, die5];


$('#roll').click(function(){
	countupper();
	countlower();
	setScore();
	
});

// Return the values of lower section elements
function countupper() {
	aces = sumDuplicates(1, dicesScores);
  twos = sumDuplicates(2, dicesScores);
    threes = sumDuplicates(3, dicesScores);
	  fours = sumDuplicates(4, dicesScores);
	    fives = sumDuplicates(5, dicesScores);
		  sixes = sumDuplicates(6, dicesScores);
		  uppertotal = aces + twos + threes + fours + fives + sixes + bonus35;
	bonus35 = uppertotal >= 63 ? 35 : 0;
			  uppertotal = aces + twos + threes + fours + fives + sixes + bonus35;
}

function countlower() {
/*	
var count = {};
dicesScores.forEach(function(i) { count[i] = (count[i]||0) + 1;});
var repeaters = Object.values(count);
ofakind3 = repeaters.some((element) > 3) ? countall() : 0;
*/
	
}

// sum all array values
function countall() {
	let count = 0;
	for (let i = 0; i < dicesScores.length; i++) {
		count += dicesScores[i];
		}
	return count ;
}


// Return the sum of specified duplicate values in an array
function sumDuplicates(value, array) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] == value) {
			count++;
		}
	}
	return count * value;
}



// Set the average results in the table
function setScore() {
	acesscore.innerHTML = aces;
	twosscore.innerHTML = twos;
	threesscore.innerHTML = threes;
	foursscore.innerHTML = fours;
	fivesscore.innerHTML = fives;
	sixesscore.innerHTML = sixes;
	bonus35score.innerHTML = bonus35;
	uppertotalscore.innerHTML = uppertotal;
	ofakind3score.innerHTML = ofakind3;
	ofakind4score.innerHTML = ofakind4;
	fullhousescore.innerHTML = fullhouse;
	smallstrscore.innerHTML = smallstr;
	largestrscore.innerHTML = largestr;
	chancescore.innerHTML = chance;
	bonusyahtzeescore.innerHTML = bonusyahtzee;
	lowertotalscore.innerHTML = lowertotal;
	totaltotalscore.innerHTML = totaltotal;
}

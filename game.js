var secretNum=4;
var strGuess=prompt("Guess a number");
var guess=Number(strGuess);
if(guess === secretNum){
	alert("You got it right");
}
else if(guess > secretNum)
{
	alert("toooo highh . guess again!");
}
else 

{
	alert("tooo loww. guess again!");
}
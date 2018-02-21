let playerHealth = document.getElementsByClassName("playerHeart");
let enemyHealth = document.getElementsByClassName("enemyHeart");

let game = true;

const welcomeMessage = "EGADS! An angry Wizard is mad you discovered his hideout, quick, cast a spell!";

window.onload = function() {
	// WELCOME MESSAGE
	let output = welcomeMessage.split("");
	setTimeout(function() {
		let message = setInterval(makeWords, 50);
	}, 1000);
	let counter = 0;
	function makeWords() {
		if(counter < output.length) {
			$("#message").append(output[counter]);
			counter++;
		}
	}
	// END WELCOME MESSAGE
}
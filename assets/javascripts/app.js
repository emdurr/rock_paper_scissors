$(document).ready(function(){
	var $gameButtons = $('.game_button');
	var $playButton = $('#play_button');
	var $choiceResult = $('#choice_result');
	var playChoice, computerChoice;
	var $computerOptions = ['Rock', 'Paper', 'Scissors'];
	var $stats = $('.stats');
	var $wins = 0;
	var $loses = 0; 
	var $ties = 0;
 	
	$gameButtons.click(function() {
		var $button = $(this);
		var $buttonText = $button.text();
		$playButton.slideDown();
		playChoice = $buttonText;
		$choiceResult.val(playChoice);
	});
	$playButton.click(function() {
		$stats.slideDown();
		computerChoice = ($computerOptions[Math.floor ( Math.random() * $computerOptions.length )])
		switch(playChoice) {
			case 'Rock':
				if(computerChoice === 'Rock') {
					alert("You've both chosen Rock. TIE!! Play again - ");
					$ties += 1;
					$('#tiers').html('Ties: ' + ($ties));
				} else if(computerChoice === 'Paper') {
					alert("The computer's paper covers your rock. You LOSE!");
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
				} else {
					alert("Your rock crushes the crap out of the computer's scissors. You Win!!");
					$wins += 1;
					$('#winner').html("Wins:" + ($wins));
				}
				break;
			case 'Paper':
				if(computerChoice === 'Paper') {
					alert("You've both chosen Paper. TIE!! Play again - ");
					$ties += 1;
					$('#tiers').html('Ties: ' + ($ties));
				} else if(computerChoice === 'Scissors') {
					alert("The computer's scissors cut your paper to ribbons. You LOSE!");
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
				} else {
					alert("Your Paper covers the computer's rock. You Win!!");
					$wins += 1;
					$('#winner').html("Wins:" + ($wins));
				}
				break;
			case 'Scissors':
				if(computerChoice === 'Scissors') {
					alert("You've both chosen Scissors. TIE!! Play again - ");
					$ties += 1;
					$('#tiers').html('Ties:' + ($ties));
				} else if(computerChoice === 'Rock') {
					alert("The computer's Rock smashes your scissors. You LOSE!");
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
				} else {
					alert("Your Scissors cut the computer's paper to bits. You Win!!");
					$wins += 1;
					$('#winner').html("Wins:" + ($wins));
				}
				break;
		}
		playChoice = undefined;
		computerChoice = undefined;
		$choiceResult.val(" ");
		$playButton.slideUp();


	});
});
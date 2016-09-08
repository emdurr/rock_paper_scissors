$(document).ready(function(){
	var $gameButtons = $('.game_button');
	var $playButton = $('#play_button');
	var $gameChoices = $('.game_choice');
	var $playAgainButton = $('#play_again_button');
	var $rockPic = $('#rock_pic');
	var $paperPic = $('#paper_pic');
	var $scissorsPic = $('#scissors_pic');
	var $rockPic2 = $('#rock_pic2');
	var $paperPic2 = $('#paper_pic2');
	var $scissorsPic2 = $('#scissors_pic2');
	var $choiceResult = $('#choice_result');
	var $winnerLoserText = $('#winner_loser_text');
	var playChoice, computerChoice;
	var $computerOptions = ['Rock', 'Paper', 'Scissors'];
	var $stats = $('.stats');
	var $wins = 0;
	var $loses = 0; 
	var $ties = 0;
 	
	$gameButtons.click(function() {
		var $button = $(this);
		var $buttonText = $button.first().attr("alt");
		$gameButtons.slideUp();
		if($buttonText === 'Rock') {
			$rockPic.slideDown();
		} else if($buttonText === 'Paper') {
			$paperPic.slideDown();
		} else if($buttonText === 'Scissors') {
			$scissorsPic.slideDown();
		}
		$playButton.slideDown();
		playChoice = $buttonText;
		$choiceResult.val(playChoice);
	});
	$playButton.click(function() {
		$stats.slideDown();
		$playAgainButton.slideDown();
		$winnerLoserText.slideDown();
		computerChoice = ($computerOptions[Math.floor ( Math.random() * $computerOptions.length )])
		switch(playChoice) {
			case 'Rock':
				if(computerChoice === 'Rock') {
					$rockPic2.slideDown();
					$ties += 1;
					$('#tiers').html('Ties: ' + ($ties));
					$winnerLoserText.addClass('blank');
					$winnerLoserText.html("Nobody wins...nobody loses...");
				} else if(computerChoice === 'Paper') {
					$paperPic2.slideDown();
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
					$winnerLoserText.addClass('red');
					$winnerLoserText.html("You lose...");
				} else {
					$scissorsPic2.slideDown();
					$wins += 1;
					$('#winner').html("Wins:" + ($wins));
					$winnerLoserText.addClass('green');
					$winnerLoserText.html("Winner! Winner!");
				}
				break;
			case 'Paper':
				if(computerChoice === 'Paper') {
					$paperPic2.slideDown();
					$ties += 1;
					$('#tiers').html('Ties: ' + ($ties));
					$winnerLoserText.addClass('blank');
					$winnerLoserText.html("Nobody wins...nobody loses...");
				} else if(computerChoice === 'Scissors') {
					$scissorsPic2.slideDown();
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
					$winnerLoserText.addClass('red');
					$winnerLoserText.html("You lose...");
				} else {
					$rockPic2.slideDown();
					$wins += 1;
					$('#winner').html("Wins:" + ($wins));
					$winnerLoserText.addClass('green');
					$winnerLoserText.html("Winner! Winner!");
				}
				break;
			case 'Scissors':
				if(computerChoice === 'Scissors') {
					$scissorsPic2.slideDown();
					$ties += 1;
					$('#tiers').html('Ties:' + ($ties));
					$winnerLoserText.addClass('blank');
					$winnerLoserText.html("Nobody wins...nobody loses...");
				} else if(computerChoice === 'Rock') {
					$rockPic2.slideDown();
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
					$winnerLoserText.addClass('red');
					$winnerLoserText.html("You lose...");
				} else {
					$paperPic2.slideDown();
					$winnerLoserText.addClass('green');
					$winnerLoserText.html("Winner! Winner!");
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
	$playAgainButton.click(function() {
		$gameChoices.slideUp();
		$gameButtons.slideDown();
		$playAgainButton.slideUp();
		$winnerLoserText.slideUp();
		$winnerLoserText.removeClass();
	});
});
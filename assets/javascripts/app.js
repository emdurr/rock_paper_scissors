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
		computerChoice = ($computerOptions[Math.floor ( Math.random() * $computerOptions.length )])
		switch(playChoice) {
			case 'Rock':
				if(computerChoice === 'Rock') {
					$rockPic2.slideDown();
					console.log($('#comp_choice'));
					$ties += 1;
					$('#tiers').html('Ties: ' + ($ties));
				} else if(computerChoice === 'Paper') {
					$paperPic2.slideDown();
					console.log($('#comp_choice'));
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
				} else {
					$scissorsPic2.slideDown();
					console.log($('#comp_choice'));
					$wins += 1;
					$('#winner').html("Wins:" + ($wins));
				}
				break;
			case 'Paper':
				if(computerChoice === 'Paper') {
					$paperPic2.slideDown();
					$ties += 1;
					$('#tiers').html('Ties: ' + ($ties));
				} else if(computerChoice === 'Scissors') {
					$scissorsPic2.slideDown();
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
				} else {
					$rockPic2.slideDown();
					$wins += 1;
					$('#winner').html("Wins:" + ($wins));
				}
				break;
			case 'Scissors':
				if(computerChoice === 'Scissors') {
					$scissorsPic2.slideDown();
					$ties += 1;
					$('#tiers').html('Ties:' + ($ties));
				} else if(computerChoice === 'Rock') {
					$rockPic2.slideDown();
					$loses += 1;
					$('#loser').html("Loses: " + ($loses));
				} else {
					$paperPic2.slideDown();
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
	});
});
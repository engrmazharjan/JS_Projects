
// Challenge 1: Your Age in Days

function ageInDays(){
    var birthYear = prompt('What Year Were You Born?');
    var ageInDaysss = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(`You Are ${ageInDaysss} Years Old.`);
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

// Reset
  function reset(){
      document.getElementById('ageInDays').remove();
  }


  // Challenge 2: Cat Generator
  function generateCat(){
      var image = document.createElement('img');
      var div = document.getElementById('flex-cat-gen');
      image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
      div.appendChild(image);
  } 



  // Challenge 3: Rock, Paper, Scissors
  function rpsGame(yourChoice){
      // console will log human choice if it is Rock, Paper or Scissors
      // this console will give complete img tag with all information about Rock, Paper, Scissors
      console.log(yourChoice);
      
      // create two variables to hold Human Choiuce and Bot Choice
      var humanChoice, botChoice;
      humanChoice = yourChoice.id; // id of either Rock, Paper, Scissors that we choose
      botChoice = numberToChoice(randToRpsInt());//bot choice will be a random choice generated with random number 
      console.log('Computer Choice: ', botChoice);

      let results = decideWinner(humanChoice, botChoice); // [1, 0][0, 1][0.5, 0.5]
      console.log(results);
      let message = finalMessage(results); //{'message': 'You Win!', 'color': 'green'} OR {'message': 'You Lost!', 'color': 'Red'} OR {'message': 'You Tied!', 'color': 'Yellow'};
      console.log(message);  
                  
      
      // to show the actuall things in front end that user actally see
      rpsFrontEnd(yourChoice.id, botChoice, message);
    }

    // Random Number Generate Function--> 0 1 2
    function randToRpsInt(){
        return Math.floor(Math.random() * 3);
    }

    // function for Bot to generate Rock, Paper, Scissors randomly
	// i.e if we choose Rock then Bot can choose Rock,Paper,Scissors 
	// Randomly and so on.
    function numberToChoice(number){
        return ['rock', 'paper', 'scissors'][number];
    }

    // Function to decide who Wins or who loose or if Tied
	// rock, paper, scissors are my options
	// if I choose rock and bot choose scissors I win, and if bot also
	// choose rock then we ties and if bot choose paper then bot wins 
    function decideWinner(yourChoice, botChoice){
        var rpsDatabase = {
            'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
            'paper':{'rock': 1, 'paper': 0.5, 'scissors': 0},
            'scissors':{'paper': 1, 'scissors': 0.5, 'rock': 0},
        } 

        var yourScore = rpsDatabase[yourChoice][botChoice];
        var computerScore = rpsDatabase[botChoice][yourChoice];
        return[yourScore, computerScore];

    }

    // Finaal Message to display if someone win, lose, or both tie
    function finalMessage([yourScore, computerScore]){
        if (yourScore === 0) {
            return {'message': 'You Lost!', 'color': 'Red'};
        }else if (yourScore === 0.5) {
            return {'message': 'You Tied!', 'color': 'Yellow'};
        }else{
            return {'message': 'You Won!', 'color': 'Green'};
        } 
    }


    // function that display the actual choice and 
	// message according to that choice on web page
    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
        var imagesDatabase = {
          'rock': document.getElementById('rock').src,
          'paper': document.getElementById('paper').src,
          'scissors': document.getElementById('scissors').src,
      }
	  // remove all images so that we can display our resultant images  
      document.getElementById('rock').remove();
      document.getElementById('paper').remove();
      document.getElementById('scissors').remove();

      // create three divs each for Human Bot and one for Message to display
      var humanDiv = document.createElement('div');
      var botDiv = document.createElement('div');
      var messageDiv = document.createElement('div');


      // get source of humanDiv, botDiv, and MessageDiv and display in flex-box-rps-div
      humanDiv.innerHTML = "<img src ='" + imagesDatabase[humanImageChoice] + "'height =150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
      messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding:30px;'>" + finalMessage['message'] + "</h1>";
      botDiv.innerHTML = "<img src ='" + imagesDatabase[botImageChoice] + "'height =150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
      
      // append above 3 divs to flex-box-rps-div
      document.getElementById('flex-box-rps-div').appendChild(humanDiv);
      document.getElementById('flex-box-rps-div').appendChild(messageDiv);
      document.getElementById('flex-box-rps-div').appendChild(botDiv);
    }



    // Challenge 4: Change The Color Of All Buttons!

    let allButtons = document.getElementsByTagName('button');
    console.log(allButtons);
    
    // make a copy for all buttons. we would need it later in reset() function
    let copyAllButtons = [];
    for(let i=0; i<allButtons.length; i++){
        copyAllButtons.push(allButtons[i].classList[1]);
    }
    console.log(copyAllButtons);

    // main function for changing colors of all buttons
    function buttonColorChange(buttonThingy){
        if (buttonThingy.value === 'random') {
            randomColors();
        }else if (buttonThingy.value === 'green') {
            buttonGreen();
        }else if (buttonThingy.value === 'red') {
            buttonRed();
        }else if (buttonThingy.value === 'reset') {
            buttonColorReset();   
        }  
    }


    // function to randomly change colors of all buttons
    function randomColors(){
        let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
        
        for(let i=0; i<allButtons.length; i++){
            let randomNumber = Math.floor(Math.random() * 4);
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(choices[randomNumber]);
        }
    }


    // function to set colors of all buttons to green
    function buttonGreen(){
        for(let i=0; i<allButtons.length; i++ ){
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-success');
        }
    }

    // function to set colors of all buttons to red
    function buttonRed(){
        for(let i=0; i<allButtons.length; i++ ){
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add('btn-danger');
        }
    }


    // function to set colors of all buttons back to original/ reset button's color
    function buttonColorReset(){
        for(let i=0; i<allButtons.length; i++){
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(copyAllButtons[i]);
        }
    }







    // Challenge 5: BlackJack
    let blackjackGame = {
        'you': {'scoreSpan': '#your-blackjack-result', 'div':'#your-box', 'score':0},
        'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div':'#dealer-box', 'score':0},
        'cards':['2', '3', '4', '5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
        'cardsMap':{'2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'J':10, 'Q':10, 'A':[1, 11]},
        'wins': 0,
        'losses': 0,
        'draws': 0,
        'isStand': false,
        'turnsOver': false,
    };

    // Users
    const YOU = blackjackGame['you'];
    const DEALER = blackjackGame['dealer'];

    // add sound
    const hitSound = new Audio('Challenges/sounds/swish.m4a');
    const winSound = new Audio('Challenges/sounds/cash.mp3');
    const lossSound = new Audio('Challenges/sounds/aww.mp3');

    document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);

    document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
    
    document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);


    // function for if someone click Hit button
    function blackjackHit(){
        if (blackjackGame['isStand'] === false) {
            let card = randomCard();
            showCard(card, YOU);
            updateScore(card, YOU);
            showScore(YOU);
        }
    }

    // random Cards
    function randomCard(){
        let randomIndex = Math.floor(Math.random() * 13);
        return blackjackGame['cards'][randomIndex];
    }

    // showCard() function to show cards in Your div
    function showCard(card,activePlayer){
        if (activePlayer['score'] <= 21) {
            let cardImage = document.createElement('img');
            cardImage.src = `Challenges/Images/${card}.png`;
            document.querySelector(activePlayer['div']).appendChild(cardImage);
            hitSound.play();  
        }
        
    }


    // blackjackDeal() function for disappearing images/ refresh
    function blackjackDeal(){
        if (blackjackGame['turnsOver'] === true) {

            blackjackGame['isStand'] = false;
            let yourImages = document.querySelector('#your-box').querySelectorAll('img');
            let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
            console.log(yourImages);
            console.log(dealerImages);

            // remove your images
            for(let i=0; i<yourImages.length; i++){
                yourImages[i].remove();
            }

            // remove dealer images
            for(let i=0; i<dealerImages.length; i++){
                dealerImages[i].remove();
            }

            // set score back to zero
            YOU['score'] = 0;
            DEALER['score'] = 0;

            document.querySelector('#your-blackjack-result').textContent = 0;
            document.querySelector('#dealer-blackjack-result').textContent = 0;
    
            document.querySelector('#your-blackjack-result').style.color = 'white';
            document.querySelector('#dealer-blackjack-result').style.color = 'white';

            document.querySelector('#blackjack-result').textContent = `Let's Play`;
            document.querySelector('#blackjack-result').style.color = 'black';

            blackjackGame['turnsOver'] = true;
        }
    }

    // update Score function
    function updateScore(card, activePlayer){
        if (card === 'A') {
            // If adding 11 keeps me below 21, add 11. Otherwise, add 1.
            if (activePlayer['score'] + blackjackGame['cardsMap'][card][1] <=21) {
                activePlayer['score'] += blackjackGame['cardsMap'][card][1];
            }else{
                activePlayer['score'] += blackjackGame['cardsMap'][card][0];
            }
        }
        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card];
        }
    }

    // Show Score function to show score on front end
    function showScore(activePlayer){
        if (activePlayer['score'] > 21) {
            document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
            document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
        }else{
            document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        }
    }

    // Promise function
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    // dealer function
    async function dealerLogic(){ 
        blackjackGame['isStand'] = true;

        while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
            let card = randomCard();
            showCard(card, DEALER);
            updateScore(card, DEALER); 
            showScore(DEALER);
            await sleep(1000)
        }

        blackjackGame['turnsOver'] = true;
        let winner = computeWinner();
        showResult(winner);
    }


    // compute winner and return who just won
    // update the wins, draws, and losses
    function computeWinner(){
        let winner;

        if (YOU['score'] <= 21) {
            // condition: higher score than dealer or when busts but you're 21 or under
            if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
                blackjackGame['wins']++;
                winner = YOU;
            }else if (YOU['score'] < DEALER['score']) {
                blackjackGame['losses']++;
                winner = DEALER;   
            }else if(YOU['score'] === DEALER['score']){
                blackjackGame['draws']++;
            }
            // condition: when user busts but dealer doesn't
        } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
            blackjackGame['losses']++;
            winner = DEALER;

            // condition: when you dealer AND the dealer busts
        }else if (YOU['score'] >21 && DEALER['score'] >21) {
            blackjackGame['draws']++;
        }
        console.log('Winner is ', winner);
        return winner;
    }


    // show result function to show result of winner
    function showResult(winner){
        let message, messageColor;

        if (blackjackGame['turnsOver'] === true) {
    
            if(winner === YOU){
                document.querySelector('#wins').textContent = blackjackGame['wins'];
                message = 'You Won!';
                messageColor = 'green';
                winSound.play();

            }else if(winner === DEALER){
                document.querySelector('#losses').textContent = blackjackGame['losses'];
                message = 'You Lost!';
                messageColor = 'red';
                lossSound.play();
            }else{
                document.querySelector('#draws').textContent = blackjackGame['draws'];
                message = 'You Drew!';
                messageColor = 'black';
            }
            document.querySelector('#blackjack-result').textContent = message;
            document.querySelector('#blackjack-result').style.color = messageColor;
        }
    }


    




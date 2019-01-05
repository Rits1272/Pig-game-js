/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,activePlayer,roundScore,gamePlaying,winPoint,Player_one,Player_two,last_dice;

function init(){
    gamePlaying = true;
roundScore = 0;
scores = [0,0];
activePlayer = 0;
    
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    document.querySelector('.dice').style.display = 'none';
    alert("Welcome to pig game!")
             Player_one = prompt("Enter Player's 1 name. ");
             Player_two = prompt("Enter Player's 2 name.");
            document.getElementById('name-0').innerHTML = Player_one;
             document.getElementById('name-1').innerHTML = Player_two;
    winPoint = prompt("What should be the winning point?")
}
init();



 
//Function for the button 'ROLL DICE'.
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying){
    //1. Random Number
 var dice = Math.floor(Math.random() * 6) + 1; 
    
    //2. Changing the image.
 var diceDOM = document.querySelector('.dice');
    diceDOM.style.display  = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    //3. Updating the score.
   if(last_dice === 6 && dice === 6){
       scores[activePlayer] = 0;
       document.getElementById('score-'+activePlayer).textContent =  0;
       nextPlayer();
   }
    else if(dice !== 1 ){
        //check whether the second turn is 6.
      
        //add score
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }
    
    else{
        nextPlayer();
    }
       
       lastdice = dice;
   }
    
});

function nextPlayer(){
    if(gamePlaying){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');
        
        diceDOM.style.display = 'none'; 
    }
}


document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add roundScore to the main score.
    if(gamePlaying){
    scores[activePlayer]  += roundScore;
    document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
    
  

    //Checking for winner.
    
    if (scores[activePlayer] >= winPoint){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
        
    }
    else{
        
      //Next Player
    nextPlayer();
        
    }
    }
    });


document.querySelector('.btn-new').addEventListener('click',function(){
   init();
          document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
          alert("Welcome to pig game!");
            var Player_one = prompt("Enter Player's 1 name. ");
            var Player_two = prompt("Enter Player's 2 name.");
            document.getElementById('name-0').innerHTML = Player_one;
             document.getElementById('name-1').innerHTML = Player_two;
    
});
   
  
    

















var players = ["Dmitry", "Sergey", "Nikolai", "Vladimir"];
var totalPlayers = players.length;
var playerSelector = 0;

function showPlayers(){
  alert(players);
  
}

function startGame(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
 
  if (playerSelector >= totalPlayers){
    playerSelector = 0;
  }
  
  if (randomNumber == 1) {
    alert("Player: " + players[playerSelector] + "\nAmmo Slot " + randomNumber + "\nYou are dead..");
    players.splice(playerSelector, 1);
    totalPlayers--;
  }
  else {
    alert("Player: " + players[playerSelector] + "\nAmmo Slot " + randomNumber  + "\nYou survived");
  }
  
  if (totalPlayers == 1){
      alert("Winner is " + players);
      var startGame = document.getElementById("startGame");
      var showPlayers = document.getElementById("showPlayers");
      startGame.parentNode.removeChild(startGame);
      showPlayers.parentNode.removeChild(showPlayers);
  }
  playerSelector++;
}
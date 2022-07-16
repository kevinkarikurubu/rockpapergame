let gameresult;
      let player_options = ["rock", "paper", "scissors"];
      let winner;
      let i = 0;

      function playGame(playerSelection, computerSelection) {
        var computerSelection =
          player_options[Math.floor(Math.random() * player_options.length)];
        var playerSelection = window.prompt(
          "Among the three Who will win? Rock,Papers and Scissors"
        );
        gameresult = playerSelection.localeCompare(computerSelection);
        console.log(gameresult);
        console.log(computerSelection);
        i = i + 1;

        if (gameresult == 0) {
          winner = "You have Won";
          document.write("Game No.");
          document.write(i);
          window.alert("You have Won");
          document.write("   You won, congs pick your cash from counter <br>");
        } else {
          winner = "Computer has Won";
          document.write("Game No.");
          document.write(i);
          document.write("  You lost,<br>");
          window.alert("You have lost, try again");
        }
        console.log(winner);
        return winner;
      }

      playGame();
      var playagain = window.confirm("Do you want to play again?");
      console.log(playagain);
      while (playagain == true) {
        playGame();
      }
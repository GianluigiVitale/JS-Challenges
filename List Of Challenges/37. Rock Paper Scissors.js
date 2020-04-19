/* 37. Rock Paper Scissors

    >Let's play! You have to return which player won! In case of a draw return Draw!.
    NOTES:
        http://i.imgur.com/aimOQVX.png
*/

var player1 = 'scissors';
var player2 = 'paper';

var funzione = game(player1, player2);
console.log(funzione);

function game(player1, player2) {
    if (player1 == player2) {
        return 'Draw!';
    }

    if (player1 == 'rock' && player2 == 'scissors' ||
        player1 == 'scissors' && player2 == 'paper' ||
        player1 === 'paper' && player2 === 'rock') {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
}
// alternative method
function game(player1, player2) {
    if (player1 == player2) {
        return 'Draw!'
    } else {
        if (player1 == 'paper') {
            if (player2 == 'rock') {
                return 'Player 1 won!';
            } else {
                return 'Player 2 won!';
            }
        } else if (player1 == 'scissors') {
            if (player2 == 'paper') {
                return 'Player 1 won!';
            } else {
                return 'Player 2 won!';
            }
        } else if (player1 == 'rock') {
            if (player2 == 'scissors') {
                return 'Player 1 won!';
            } else {
                return 'Player 2 won!';
            }
        }
    }
}

// works, but need to tidy up:
// clear results between games, especially after valid then invalid input.


function rollDice() {
    return Math.ceil(Math.random() * (1 + 6 - 1)) + Math.ceil(Math.random() * (1 + 6 - 1));
}

function writeResults(startingBet, rolls, maxMoney, rollsAtMaxMoney) {
    document.getElementById('startingBetOut').innerText = startingBet;
    document.getElementById('rollsOut').innerText = rolls;
    document.getElementById('maxMoneyOut').innerText = maxMoney;
    document.getElementById('rollsAtMaxMoneyOut').innerText = rollsAtMaxMoney;
}

function main() {
    var gameMoney = 0;
    var maxMoney = 0;  // requirements?  assume initial bet is not included.
    var rolls = 0;
    var rollsAtMaxMoney = 0;

    var startingBet = document.getElementById('startingBetIn').value;
    if (startingBet <= 0) {
        alert("The starting bet must be greater than $0.00");
        return false;
    }

    gameMoney = startingBet;

    while (gameMoney > 0) {
        var diceTotal = rollDice();
        rolls ++;
        if (diceTotal == 7) {
            gameMoney = gameMoney + 4;
            if ((maxMoney < gameMoney) && (startingBet < gameMoney)) {
                maxMoney = gameMoney;
                rollsAtMaxMoney = rolls;
            }
        } else {
            gameMoney = gameMoney - 1;
        }
    }

    writeResults(startingBet, rolls, maxMoney, rollsAtMaxMoney);
    document.getElementById('playButton').innerText = "Play Again";
    document.getElementById('results').style.display = "";

    return false;
}

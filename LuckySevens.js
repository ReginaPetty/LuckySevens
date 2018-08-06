function rollDice() {
    return Math.ceil(Math.random() * (1 + 6 - 1)) + Math.ceil(Math.random() * (1 + 6 - 1));
}

function main() {
    var startingBet = document.getElementById('startingBet').value;
    if (startingBet <= 0) {
        alert("The starting bet must be greater than $0.00");
        return false;
    }

    var gameMoney = startingBet;
    var maxMoney = 0;  // requirements?  assume initial bet is not included.
    var rolls = 0;
    var rollsAtMaxMoney = 0;

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

    document.getElementById('startingBetOut').innerText = startingBet;
    document.getElementById('rolls').innerText = rolls;
    document.getElementById('maxMoney').innerText = maxMoney;
    document.getElementById('rollsAtMaxMoney').innerText = rollsAtMaxMoney;

    return false;


}

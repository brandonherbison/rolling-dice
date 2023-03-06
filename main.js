console.log("Let's roll some dice, baby!");
console.log("---------------------------");

// function to roll the dice ten times
function rollDice() {
    for (var i = 0; i < 10; i++) {
        //create two dice
        let die1 = new Die(Math.floor(Math.random() * 6) + 1);
        let die2 = new Die(Math.floor(Math.random() * 6) + 1);
        let sum = die1.value + die2.value;
        die1 = die1.convertToString();
        die2 = die2.convertToString();

        if (die1 === die2) {
            console.log(`${die1} + ${die2} == ${sum} DOUBLES!`);
        } else {
            console.log(`${die1} + ${die2} == ${sum}`);
        }
    }
}

class Die {
    constructor(value) {
        this.value = value;
    }

    convertToString() {
        
        switch (this.value) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
        }
        
    }

}

rollDice();
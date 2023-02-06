const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const secret = "498";

function askForCombination() {
    readline.question(`Entre une combinaison de 3 chiffres : `, (input) => {
        if (input.length !== 3) {
            console.log(`Juste trois chiffres`);
            askForCombination();
            return;
        }

        let rightPlace = 0;
        let rightNumber = 0;
        for (let i = 0; i < 3; i++) {
            if (input[i] === secret[i]) {
                rightPlace++;
            } else if (secret.includes(input[i])) {
                rightNumber++;
            }
        }
        console.log(`Right place: ${rightPlace}, Right number: ${rightNumber}`);
        if (rightPlace === 3) {
            console.log(`Bravo, tu peux passer à l'épreuve suivante`);
            readline.close();
        } else {
            askForCombination();
        }
    });
}

askForCombination();
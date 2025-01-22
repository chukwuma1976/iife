import { physicsCalculations } from "./iifePhysicsCalculations.js";
import { questionBank } from "./PhysicsQuestions.js";
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const choices = questionBank.map(question => `\t${(questionBank.indexOf(question) + 1)}) ${question.calculation}`);
const ids = questionBank.map(question => question.id);

function calculate(equation, numbers) {
    switch (equation) {
        case '1': return physicsCalculations.velocity(...numbers);
        case '2': return physicsCalculations.acceleration(...numbers);
        case '3': return physicsCalculations.potentialEnergy(...numbers);
        case '4': return physicsCalculations.momentum(...numbers);
        case '5': return physicsCalculations.energy(...numbers);
        case '6': return physicsCalculations.force(...numbers);
        case '7': return physicsCalculations.kineticEnergy(...numbers);
        default: return NaN;
    }
}

const askQuestion = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer)
        })
    })
};

function printChoices() {
    console.log('Physics Equations');
    choices.forEach(choice => console.log(choice));
    console.log('\t0) To exit\n');
}

let calculating = true;
while (calculating) {
    let numbers = [];

    printChoices();
    const choice = await askQuestion(`Type a number to select an equation: `);
    if (!ids.includes(choice)) break;
    const physicsQuestion = questionBank.find(question => question.id === choice);
    console.log(physicsQuestion.calculation);

    for (const entry of physicsQuestion.entries) {
        const number = await askQuestion(`Enter ${entry}: `);
        numbers.push(number)
    }

    console.log(`${physicsQuestion.calculation.split(' (')[0]} = ${calculate(choice, numbers)} ${physicsQuestion.units}\n`);
}

rl.close();
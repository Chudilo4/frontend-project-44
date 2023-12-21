#!/usr/bin/env node
import AskQuestion from '../src/cli.js';
import getRandomNumber from '../src/random.js';

const StartProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = AskQuestion('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if given number is prime. Otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const n = getRandomNumber(1, 3572);
    let correct = 'yes';
    for (let i2 = 0; i2 < n; i2 += 1) {
      if (n % 1 === 0) {
        correct = 'no';
      }
    }
    console.log(`Question: ${n}`);
    const answer = AskQuestion('Your answer: ');
    if (answer === 'yes' && correct === 'yes' || answer === 'no' && correct === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
StartProgression();

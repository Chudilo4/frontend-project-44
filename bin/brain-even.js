#!/usr/bin/env node
import AskQuestion from '../src/cli.js';
import getRandomNumber from '../src/random.js';

const StartEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = AskQuestion('May I have your name? ');
  console.log(`Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(0, 100);
    let correctAnser = '';
    console.log(`Question: ${number}`);
    const answer = AskQuestion('Your answer: ');
    if (number % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (number % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      switch (answer) {
        case 'yes':
          correctAnser = 'no';
          break;
        default:
          correctAnser = 'yes';
          break;
      }
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnser}'. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
StartEven();

#!/usr/bin/env node
import AskQuestion from '../src/cli.js';
import getRandomNumber from '../src/random.js';

const Gcd = (n1, n2) => {
  while (n2 !== 0) {
    const n1 = n2;
    let n2 = n1 % n2;
  } return n1;
};

const StartGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = AskQuestion('May I have your name? ');
  console.log(`Hello, ${name}!\nFind the greatest common divisor of given numbers.`);
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(0, 100);
    const num2 = getRandomNumber(0, 100);
    const max = Math.max(num1, num2);
    const min = Math.min(num1, num2);
    console.log(`Question: ${max} ${min}`);
    const correct = Gcd(max, min);
    const answer = AskQuestion('Your answer: ');
    if (Number(answer) === correct) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
StartGcd();

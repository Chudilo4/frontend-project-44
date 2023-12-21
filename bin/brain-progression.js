#!/usr/bin/env node
import AskQuestion from '../src/cli.js';
import getRandomNumber from '../src/random.js';

const StartProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = AskQuestion('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat number is missing in the progression?`);
  for (let i = 0; i < 3; i += 1) {
    const arr = [];
    const start = getRandomNumber(0, 100);
    const diff = getRandomNumber(1, 10);
    const rang = getRandomNumber(5, 10);
    const tiff = getRandomNumber(0, rang);
    const AnTr = start + (diff * tiff);
    let count = start;
    for (let i2 = 0; i2 < rang + 1; i2 += 1) {
      if (i2 === tiff) {
        arr.push('..');
      } else {
        arr.push(count);
      }
      count += diff;
    }
    console.log(`Question: ${arr.join(' ')}`);
    const answer = AskQuestion('Your answer: ');
    if (Number(answer) === AnTr) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${AnTr}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

StartProgression();

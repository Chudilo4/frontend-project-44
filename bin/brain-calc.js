import AskQuestion from '../src/cli.js';
import getRandomNumber from '../src/random.js';

const Sum = (a, b) => a + b;

const Subtraction = (a, b) => a - b;

const Multiplication = (a, b) => a * b;

const StartGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = AskQuestion('May I have your name? ');
  console.log(`Hello, ${name}!\nWhat is the result of the expression?`);
  const arrOperation = ['+', '-', '*'];
  const funcs = [Sum, Subtraction, Multiplication];
  for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomNumber(1, 100);
    const num2 = getRandomNumber(1, 100);
    const sum = funcs[i](num1, num2);
    console.log(`Question: ${num1} ${arrOperation[i]} ${num2}`);
    const answer = AskQuestion('Your answer: ');
    if (Number(answer) === sum) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${sum}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
StartGame();

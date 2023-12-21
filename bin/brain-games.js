#!/usr/bin/env node
import AskQuestion from '../src/cli.js';

let Welcome = 'Welcome to the Brain Games!';
let NameQuestion = 'May I have your name? ';

console.log(Welcome);
AskQuestion(NameQuestion);



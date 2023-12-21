#!/usr/bin/env node
import AskQuestion from '../src/cli.js';

const Welcome = 'Welcome to the Brain Games!';
const NameQuestion = 'May I have your name? ';

console.log(Welcome);
AskQuestion(NameQuestion);

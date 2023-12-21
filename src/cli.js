import readlineSync from 'readline-sync';

const AskQuestion = (question) => {
  const name = readlineSync.question(question);
  return name;
};

export default AskQuestion;

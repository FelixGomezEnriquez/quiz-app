export interface Question {
  results: [{
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    question: string;
  }];
}

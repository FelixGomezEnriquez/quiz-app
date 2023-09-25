import { Question } from "./question";

export interface Game {
  askedQuestions: number;
  correctAnswers: number;
  name?: string ;
  apiKey: string;
  category: string;
  currentQuestion?: Question; //por ahora
}

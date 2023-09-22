export interface Game {
  askedQuestions: number;
  correctAnswers: number;
  name?: string ;
  apiKey: string;
  category: string;
  currentQuestion?: any; //por ahora
}

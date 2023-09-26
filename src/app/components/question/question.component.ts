import confetti from 'canvas-confetti';
import { TriviaService } from 'src/app/services/trivia.service';
import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/interfaces/game';
import { TimerComponent } from '../timer/timer.component';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() game!: Game;
  @Input() categorySelected!: Category;

  @ViewChild(TimerComponent) timerComponent?: TimerComponent; // Obtén una referencia al componente hijo

  answers: string[] = [];

  constructor(private router: Router, private triviaService: TriviaService) {}
  ngOnInit(): void {
    this.answers = this.changeAnswers();
  }

  changeAnswers(): string[] {
    let answers: string[] = [];

    answers.push(this.game.currentQuestion!.results[0].correct_answer);
    answers = answers.concat(
      this.game.currentQuestion!.results[0].incorrect_answers
    );
    //Desordenamos las respuestas
    answers.sort(() => {
      return Math.random() - 0.5;
    });

    return answers;
  }
  ngAfterViewInit() {
    console.log();
  }
  async checkAnswer(answer: HTMLElement): Promise<void> {
    console.log(this.timerComponent);

    let isCorrect =
      answer.innerHTML == this.game.currentQuestion!.results[0].correct_answer;

    console.log(isCorrect);
    if (isCorrect) {
      this.game.askedQuestions++;
      this.game.correctAnswers++;
      this.timerComponent?.resetTimer();
      this.game.currentQuestion = await this.triviaService
        .getQuestionEasy(this.categorySelected, this.game.apiKey)
        .toPromise();
      this.answers = this.changeAnswers();
      confetti();
    } else {
      this.game.askedQuestions++;
      this.router.navigate(['/fail', this.game]);
    }
  }
  noTime(isTime: boolean): void {
    if (isTime) {
      alert('Your time is end!!');
      this.router.navigate(['/fail', this.game]);
    }
  }
}

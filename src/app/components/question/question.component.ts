import { Component, Input } from '@angular/core';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  @Input() question?: Question;

  answers: string[] = [];

  ngOnInit(): void {
    // console.table(this.question!);

    // console.log(this.question?.results[0]);
    // this.question?.results[0].category;
    // console.log(this.question?.results);
    // console.log(this.question?.results[0].correct_answer);
    // console.log(this.question?.results[0].incorrect_answers);
    let answers:string[]=[];

    answers.push(this.question!.results[0].correct_answer);
    answers = answers.concat(this.question!.results[0].incorrect_answers);
    //Desordenamos las respuestas
    answers.sort(() => {
      return Math.random() - 0.5;
    });

    this.answers= answers;

  }

  ngOnChanges(): void {}
}


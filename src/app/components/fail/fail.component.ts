import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Game } from 'src/app/interfaces/game';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss'],
})
export class FailComponent {
  public game?: Game;
  constructor(private actRoute: ActivatedRoute,private route:Router) {
    this.actRoute.params.subscribe((params: Params) => {
      console.log(params);
      let {
        apiKey,
        askedQuestions,
        correctAnswers,
        currentQuestion,
        category,
        name,
      } = params;

      this.game = {
        apiKey,
        askedQuestions,
        correctAnswers,
        currentQuestion,
        category,
        name,
      };
    });
  }

  retry():void{
    this.route.navigate(['']);
  }
}

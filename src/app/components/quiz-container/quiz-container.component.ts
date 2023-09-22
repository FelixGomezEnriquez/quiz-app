import { TriviaService } from './../../services/trivia.service';
import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Game } from 'src/app/interfaces/game';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogGameComponent } from '../dialog-game/dialog-game.component';
import { Question } from 'src/app/interfaces/question';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.scss'],
})
export class QuizContainerComponent {
  public textButton: string = 'Play!';
  public play: boolean = false;
  public categorySelected: Category = { id: 0, name: 'default' };
  public game?: Game;


  constructor(private triviaService: TriviaService, public dialog: MatDialog) {}

  checkCategorySelected(category: Category): void {
    console.log(category);
    this.categorySelected = category;
  }

  startGame(): void {
    console.log(this.categorySelected);

    //Creamos una partida nueva
    this.game = {
      askedQuestions: 0,
      correctAnswers: 0,
      apiKey: this.triviaService.generateApiToken(),
      category: this.categorySelected.name,
    };

    console.log(this.game.name);
    //Pedimos el nombre para el Ranking
    this.openDialog();

    //pido una pregunta pasando la categoria y el apikey
    
    this.triviaService.getQuestionEasy(this.categorySelected, this.game.apiKey)
    .subscribe((question :Question)=>{
      console.log(question.results);

    });

    //EFECTO MOVERSE A LA IZQUIERDA AL INICIAR EL JUEGO

    // Guardar Question en el localstorage
    this.play = !this.play;
  }





   openDialog(): void {
    const dialogRef = this.dialog.open(DialogGameComponent, {
      data: { name: '' },
    });
    const result = dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.game!.name= (result!="")? result:"NoName" ;
    });
  }



}

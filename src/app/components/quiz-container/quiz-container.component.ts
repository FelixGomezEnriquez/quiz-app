import { TriviaService } from './../../services/trivia.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Game } from 'src/app/interfaces/game';
import { MatDialog } from '@angular/material/dialog';
import { DialogGameComponent } from '../dialog-game/dialog-game.component';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.scss'],
})
export class QuizContainerComponent {
  @ViewChild('container', { static: false }) container?: ElementRef;

  public textButton: string = 'Play!';
  public play: boolean = false;
  public categorySelected: Category = { id: 0, name: 'default' };
  public game: Game = {
    askedQuestions: 0,
    correctAnswers: 0,
    apiKey: '',
    category: 'All',
  };

  constructor(private triviaService: TriviaService, public dialog: MatDialog) {}

  checkCategorySelected(category: Category): void {
    this.categorySelected = category;
  }

  async startGame(): Promise<void> {
    let api: string = '';

    //Generamos una api para el jugador
    const token = await this.triviaService.generateApiToken().toPromise();
    const apiKey = token.token;

    //Creamos una partida nueva
    this.game = {
      askedQuestions: 0,
      correctAnswers: 0,
      apiKey: apiKey,
      category: this.categorySelected.name,
    };

    //pido una pregunta pasando la categoria y el apikey
    this.game.currentQuestion = await this.triviaService
      .getQuestionEasy(this.categorySelected, this.game.apiKey)
      .toPromise();

    //Pedimos el nombre para el Ranking
    this.openDialog();


  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogGameComponent, {
      data: { name: '' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.game.name = result != '' ? result : 'NoName';
      //Activamos el container de la partida una vez introducido el nombre
      this.play = !this.play;
      this.container!.nativeElement.classList.remove('slide-in-bck-center');
      this.container!.nativeElement.classList.add(
        'slide-in-elliptic-left-fwd'
      );
    });
  }
}

import { TriviaService } from './../../services/trivia.service';
import { Component } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { Game } from 'src/app/interfaces/game';
import {
  MatDialog,
  MatDialogRef
} from '@angular/material/dialog';
import { DialogGameComponent } from '../dialog-game/dialog-game.component';

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
    //LLAMADA AL SERVICE CON LA CATEGORIA que este seleccionada amount 1
    this.openDialog();
    //pedir datos de Game al usuario
  //Controlar si el name esta vacio

    this.triviaService.getQuestionEasy(this.categorySelected);

    //EFECTO MOVERSE A LA IZQUIERDA AL INICIAR EL JUEGO

    // Guardar Question en el localstorage
    this.play = !this.play;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogGameComponent, {  data:{ name:""}  });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-game',
  templateUrl: './dialog-game.component.html',
  styleUrls: ['./dialog-game.component.scss'],
})
export class DialogGameComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogGameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string }
  ) {}
  onAcceptClick(input: HTMLInputElement): void {
    this.data.name = input.value;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

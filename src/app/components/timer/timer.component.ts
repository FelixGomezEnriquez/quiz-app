import { Component, ChangeDetectorRef } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  public secondsLeft = 40;
  private subscription$?: Subscription;

  constructor(private cdr: ChangeDetectorRef) {
    this.startTimer();
  }
  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.subscription$ = interval(1000)
      .pipe(takeWhile(() => this.secondsLeft > 0))
      .subscribe({
        next: () => {
          this.secondsLeft--;
          // Notificar a Angular que debe verificar los cambios en las propiedades
          this.cdr.detectChanges();
        },
        complete: () => {
          alert('¡Se acabó el tiempo!');
        },
      });
  }

  stopTimer() {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }
  resetTimer(): void {
    this.secondsLeft = 40;
  }
}

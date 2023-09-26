import { Component, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile, map } from 'rxjs/operators';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  @Output() noTime = new EventEmitter<boolean>();
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
          this.noTime.emit(true);
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

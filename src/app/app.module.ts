import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogGameComponent } from './components/dialog-game/dialog-game.component';
import { QuestionComponent } from './components/question/question.component';
import { TimerComponent } from './components/timer/timer.component';
import { FailComponent } from './components/fail/fail.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormatSecondsPipe } from './pipes/format-seconds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuizContainerComponent,
    CategoriesComponent,
    DialogGameComponent,
    QuestionComponent,
    TimerComponent,
    FailComponent,
    FooterComponent,
    FormatSecondsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

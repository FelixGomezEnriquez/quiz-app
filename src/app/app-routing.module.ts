import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FailComponent } from './components/fail/fail.component';
import { QuizContainerComponent } from './components/quiz-container/quiz-container.component';

const routes: Routes = [

  {path: '', component: QuizContainerComponent},
  {path: 'fail', component: FailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() question: any ;


  ngOnInit(): void {
    console.log(this.question);
  }

  ngOnChanges(): void {
    console.log(this.question);
  }
}

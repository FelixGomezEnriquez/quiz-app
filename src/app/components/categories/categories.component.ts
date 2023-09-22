import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Category } from 'src/app/interfaces/category';
import { TriviaService } from 'src/app/services/trivia.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  @Output() selectOnChange = new EventEmitter<Category>();

  public categorySelectedId: number = 0;
  public categorySelected?: Category;
  public categories: Category[] = [];
  constructor(private triviaService: TriviaService) {}

  ngOnInit(): void {
    this.triviaService.getAllCategories().subscribe({
      next: (res: any) => {
        res.trivia_categories.forEach((element: any) => {
          this.categories.push(element);
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  selectChange(categoryId: number): void {
    console.log(categoryId);
   const selectedCategory= this.categories.find((element)=>{ return element.id==categoryId})
    if (selectedCategory){
      this.categorySelected=selectedCategory;
      this.selectOnChange.emit(this.categorySelected);
    }else{
      console.log("Error Categoria no encontrada");
    }
  }
}

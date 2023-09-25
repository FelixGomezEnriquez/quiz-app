import { Category } from './../interfaces/category';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TriviaService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Object> {
    return this.http.get('https://opentdb.com/api_category.php');
  }
  getQuestionEasy(category: Category, apiKey: string): Observable<any> {
    return this.http.get(
      `https://opentdb.com/api.php?amount=1&category=${category.id}&difficulty=easy&token=${apiKey}`
    );
  }

  generateApiToken(): Observable<any> {
    return this.http.get('https://opentdb.com/api_token.php?command=request');
  }
}

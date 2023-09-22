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
  getQuestionEasy(category: Category): Observable<Object> {
    return this.http.get('https://opentdb.com/api_category.php');
  }

  generateApiToken(length: number = 32): string {
    // Caracteres permitidos en el token (alfanuméricos y símbolos)
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|';

    let apiToken = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      apiToken += characters.charAt(randomIndex);
    }

    return apiToken;
  }
  
}

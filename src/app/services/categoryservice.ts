import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable()
export class CategoryService {
  baseUrl = 'http://localhost:4848/categories';

  constructor(private http: HttpClient) {}

  addCategory(category: Category): Observable<Category> {
    const url = this.baseUrl + '/add';
    let requestData = {
      categoryName: category.categoryName,
    };
    let observable: Observable<Category> = this.http.post<Category>(
      url,
      requestData
    );
    return observable;
  }
  fetchCategoryById(catId: string): Observable<Category> {
    const url = this.baseUrl + '/get/catId/' + catId;
    let observable: Observable<Category> = this.http.get<Category>(url);
    return observable;
  }
}

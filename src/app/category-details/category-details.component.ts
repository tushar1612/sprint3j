import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { CategoryService } from '../services/categoryservice';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css'],
})
export class CategoryDetailsComponent {
  category: Category | undefined;
  constructor(private categoryService: CategoryService) {}

  fetchCategory(myform: any) {
    let data = myform.value;
    let id: string = data.catId;

    let observable: Observable<Category> = this.categoryService.fetchCategoryById(
      id
    );

    observable.subscribe(
      (category: Category) => (this.category = category),
      (err) => console.log('error is' + err.message)
    );
  }
}

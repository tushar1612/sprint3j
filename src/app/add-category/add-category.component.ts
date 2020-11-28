import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { CategoryService } from '../services/categoryservice';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent {
  category: Category | undefined;

  constructor(private categoryService: CategoryService) {}
  addCategory(myform: any) {
    let data = myform.value;
    this.category = new Category('', data.categoryName);
    let observable: Observable<Category> = this.categoryService.addCategory(
      this.category
    );
    observable.subscribe(
      (category: Category) => (this.category = category),
      (err) => console.log('error is' + err.message)
    );
    myform.reset();
  }
}

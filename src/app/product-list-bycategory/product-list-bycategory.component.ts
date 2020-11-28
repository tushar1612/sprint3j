import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-product-list-bycategory',
  templateUrl: './product-list-bycategory.component.html',
  styleUrls: ['./product-list-bycategory.component.css'],
})
export class ProductListBycategoryComponent {
  errorMsg: string = '';
  catId: string | undefined;
  products: Product[] = [];
  constructor(private productService: ProductService) {}
  fetchProductsByCategory(myforms: any) {
    let data = myforms.value;
    let id: string = data.catId;
    let observable: Observable<
      Product[]
    > = this.productService.fetchProductsByCategory(id);
    observable.subscribe(
      (products) => (this.products = products),
      (err) => {
        console.log('error is' + err.message);
        this.errorMsg = err.message;
      }
    );
  }
}

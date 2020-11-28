import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { CategoryService } from '../services/categoryservice';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  product: Product | undefined;
  constructor(private productService: ProductService) {}
  addProduct(myform: any) {
    let data = myform.value;
    this.product = new Product(
      0,
      data.productName,
      data.price,
      data.color,
      data.dimension,
      data.specification,
      data.manufacturer,
      data.quantity,
      data.catId,
      ''
    );

    let observable: Observable<Product> = this.productService.addProduct(
      this.product
    );
    observable.subscribe(
      (product: Product) => (this.product = product),
      (err) => console.log('error is' + err.message)
    );
    myform.reset();
  }
}

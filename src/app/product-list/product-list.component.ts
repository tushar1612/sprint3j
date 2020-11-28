import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { CategoryService } from '../services/categoryservice';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products:any;

  constructor(private productService: ProductService) {
    
  }
   ngOnInit() {
    
    this.productService.fetchProducts()
    .subscribe(data=>{
      this.products=data;
  
  });
  }

  removeProduct(productId:number){
    let choice =confirm("Are You Sure ?");
      if(choice)
        this.productService.deleteProductById(productId).subscribe(data=>this.products=data);

}
}

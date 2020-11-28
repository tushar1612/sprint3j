import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { Product } from '../model/product';

@Injectable()
export class ProductService {
  baseUrl = 'http://localhost:4848/products';

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + '/add';
    let requestData = {
      productName: product.productName,
      price: product.price,
      color: product.color,
      dimension: product.dimension,
      specification: product.specification,
      manufacturer: product.manufacturer,
      quantity: product.quantity,
      catId: product.catId,
    };
    let observable: Observable<Product> = this.http.post<Product>(
      url,
      requestData
    );
    return observable;
  }

  fetchProducts(): Observable<Product[]> {
    const url = this.baseUrl + '/viewall';
    let observable: Observable<Product[]> = this.http.get<Product[]>(url);
    return observable;
  }

  fetchProductById(id: number): Observable<Product> {
    const url = this.baseUrl + '/get/id/' + id;
    let observable: Observable<Product> = this.http.get<Product>(url);
    return observable;
  }

  fetchProductsByCategory(catId: string): Observable<Product[]> {
    const url = this.baseUrl + '/viewProductByCategory/' + catId;
    let observable: Observable<Product[]> = this.http.get<Product[]>(url);
    return observable;
  }
  deleteProductById(productId:number){
    const url=this.baseUrl + '/remove/'+ productId;
    return this.http.delete(url);
  }
}

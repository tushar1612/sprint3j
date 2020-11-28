import { Category } from './category';

export class Product {
  constructor(
    public productId: number,
    public productName: String,
    public price: number,
    public color: String,
    public dimension: String,
    public specification: String,
    public manufacturer: String,
    public quantity: number,
    public catId: string,
    public categoryName: string
  ) {}
}

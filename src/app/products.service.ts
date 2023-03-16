import { Injectable } from '@angular/core';
import { IProduto, produtos } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduto[] = produtos;
  constructor() { }

  getAll() {
    console.log(this.products);
    return this.products;
  }
  
  getOne(productId: number) {
    //console.log(this.products.find(product => product.id = productId));
    return this.products.find(product => product.id == productId);
  }
}

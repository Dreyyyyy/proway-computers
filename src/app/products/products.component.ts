import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, produtos } from '../products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: IProduto[] | undefined;

  constructor(private productService: ProductsService, private route:ActivatedRoute) {

  }
  
  ngOnInit(): void {
    const products = this.productService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const description = params.get("descricao")?.toLowerCase();

      if (description) {
        this.products = products.filter(product => product.descricao.toLowerCase().includes(description));
        return;
      }

      this.products = products;
    });
  }
}

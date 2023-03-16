import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { IProductCart, IProduto } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduto | undefined;
  quantity = 1;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private notificationService: NotificationService, private cartService: CartService) {

  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    this.notificationService.notify("The product has been added to cart");
    const product: IProductCart = {
      ...this.product!,
      quantity: this.quantity
    }
    this.cartService.addToCart(product);
  }
}

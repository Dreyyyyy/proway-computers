import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { IProductCart } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: IProductCart[] = [];
  total = 0;

  constructor(public cartService: CartService, private router: Router) {

  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calcTotal();
  }

  calcTotal() {
    this.total = this.cartItems.reduce((prev, curr) => prev + (curr.preco * curr.quantity), 0);
  }

  removeProductCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.cartService.removeProductCart(productId);
    this.calcTotal();
  }

  buy() {
    alert("You finished your purchase.");
    this.cartService.freeCart();
    this.router.navigate(["products"]);
  }
}

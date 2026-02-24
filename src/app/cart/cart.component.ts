import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../core/services/cart.service';
import { Product } from '../shared/models/product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
})
export class CartComponent {

  constructor(private cartService: CartService) {}

  get items(): Product[] {
    return this.cartService.getItems();
  }

  clear() {
    this.cartService.clearCart();
  }

get total(): number {
  return this.items.reduce((sum, item) => sum + item.price, 0)
}
}
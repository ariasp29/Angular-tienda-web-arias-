import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';

export interface CartItem extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];

  constructor() {
    this.loadCart();
  }

  addToCart(product: Product) {
    const existingItem = this.items.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }

    this.saveCart();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  private loadCart() {
    const storedCart = localStorage.getItem('cart');
    this.items = storedCart ? JSON.parse(storedCart) : [];
  }
}
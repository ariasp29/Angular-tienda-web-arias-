import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../shared/models/product';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
  {
    id: 1,
    name: 'laptop',
    price: 2990000,
    oldPrice: 3500000,
    image: 'assets/macbook.png'
  },
  {
    id: 2,
    name: 'Airpods',
    price: 450000,
    oldPrice: 699000,
    image:'assets/airpods.png'
  },
  {
    id: 3,
    name: 'whatch',
    price: 999000,
    oldPrice: 1350000,
    image: 'assets/applewatch.png'
  }
  ]
}

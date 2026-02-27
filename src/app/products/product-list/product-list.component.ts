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
    name: 'Laptop',
    price: 2990000,
    oldPrice: 3500000,
    image: 'assets/macbook.png'
  },
  {
    id: 2,
    name: 'Airpods',
    price: 500000,
    oldPrice: 699000,
    image:'assets/airpods.png'
  },
  {
    id: 3,
    name: 'Watch',
    price: 999000,
    oldPrice: 1350000,
    image: 'assets/applewatch.png'
  },
  {
    id: 4,
    name: 'Play Station',
    price:2150000,
    oldPrice: 2499000,
    image: 'assets/ps5.png'
  },
  {
    id: 5,
    name: 'Tv 4K',
    price: 1749000 ,
    oldPrice: 2199000,
    image: 'assets/tv.png' 
  },
  {
    id: 6,
    name: "Iphone 16 Pro MAx",
    price:4500000,
    oldPrice:5200000,
    image: 'assets/iphone.png'
  },
  {
    id: 7,
    name: 'Xbox serie X',
    price: 1900000,
    oldPrice: 2300000,
    image: 'assets/x_box.png'
  },
  {
    id: 8,
    name: 'JBL Charge 6',
    price: 650000,
    oldPrice: 789000,
    image: 'assets/jbl.png'
  },
  {
    id: 9,
    name: 'Apple Airtag',
    price: 135000,
    oldPrice: 189000,
    image: 'assets/apple-airtag.png'
  },
  {
    id: 10,
    name: 'Apple ipad M2',
    price: 2399000,
    oldPrice: 2599000,
    image: 'assets/ipad.png'
  }
  ]
}

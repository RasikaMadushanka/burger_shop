import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
   orders: any[] = [];


  snacks = [
    { name: 'French Fries', description: 'Crispy golden fries', price: 375, image: 'snack1.jpg' },
    { name: 'Cheese Balls', description: 'Cheesy and crunchy', price: 450, image: 'snack2.jpg' },
    { name: 'Onion Rings', description: 'Crispy onion rings', price: 325, image: 'snack3.jpg' },
    { name: 'Nachos', description: 'Corn chips with salsa', price: 500, image: 'snack4.jpg' },
    { name: 'Popcorn', description: 'Buttery and salty', price: 299, image: 'snack5.jpg' }
  ];

  Beverages = [
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' }


  ];

  Burgers = [
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' }
  ];

  Chips = [
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' },
    { name: 'orange juice', description: 'natural orange use', price: 250, image: 'beverage1.jpg' }
  ];
  addToOrder(item: any) {
    this.orders.push(item);
  }

}
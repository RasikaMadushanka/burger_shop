import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderserviceService } from '../../api/orderserviceapi/orderservice.service';
import { ItemserviceService } from '../../api/itemservice.service';
import { Item } from '../../api/itemservice.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  items: Item[] = [];
  Burgers: Item[] = [];
  Beverages: Item[] = [];
  snacks: Item[] = [];
  Chips: Item[] = [];

  constructor(
    private itemService: ItemserviceService,
    private orderService: OrderserviceService
  ) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getAllitem().subscribe({
      next: (data) => {
        this.items = data;
        this.Burgers = data.filter(i => i.status === 'burger');
        this.Beverages = data.filter(i => i.status === 'beverage');
        this.snacks = data.filter(i => i.status === 'snack');
        this.Chips = data.filter(i => i.status === 'chips');
      },
      error: (err) => {
        console.error('Failed to load items:', err);
      }
    });
  }

  addToOrder(item: Item) {
    this.orderService.addOrder(item);
  }
}

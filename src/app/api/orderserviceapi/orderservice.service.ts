import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OrderserviceService {
  private ordersSource = new BehaviorSubject<any[]>([]);
  orders$ = this.ordersSource.asObservable();

  addOrder(item: any) {
    const currentOrders = this.ordersSource.value;
    const existing = currentOrders.find(o => o.name === item.name);

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
      this.ordersSource.next([...currentOrders]);
    } else {
      this.ordersSource.next([...currentOrders, { ...item, quantity: 1 }]);
    }
  }

  deleteOrder(itemName: string) {
    const updated = this.ordersSource.value.filter(o => o.name !== itemName);
    this.ordersSource.next(updated);
  }

  clearOrders() {
    this.ordersSource.next([]);
  }

  getSubtotal(): number {
    return this.ordersSource.value.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderserviceService } from '../../api/orderserviceapi/orderservice.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orders: any [] =[];
  subtotal = 0;
   constructor(private orderService : OrderserviceService){
    this.orderService.orders$.subscribe(data =>{
      this.orders = data;
      this.subtotal = this.orderService.getSubtotal()
    })
   }

}

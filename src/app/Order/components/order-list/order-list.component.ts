import { OrderDetailsService } from './../../Service/order-details.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Order, OrderDetails } from '../../models/order/order.module';
import { OrderService } from '../../Service/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  Orders: Order[] = [];
  OrdersDetails: OrderDetails[] = [];
  constructor(private OrderService: OrderService,private OrderDetailsService:OrderDetailsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.OrderService.GetAllOrder().subscribe(Orders => {
      this.Orders = Orders;
    });
  }
  fetchOrdersDetails(id:number): void {
    this.OrderDetailsService.GetOrdersDetails(id).subscribe(Orders => {
      this.OrdersDetails = Orders;
    });
  }

  editOrder(id: number): void {
    this.fetchOrdersDetails(id);
  }

  deleteOrder(id: number): void {
    if (confirm('Are you sure to delete this Order?')) {
      this.OrderService.DeleteOrder(id).subscribe((d) => {
        this.fetchOrders(); // Refresh the list
      });
    }
  }
  deleteOrderDetails(id: number,OId:number): void {
    if (confirm('Are you sure to delete this Order Item?')) {
      this.OrderDetailsService.DeleteOrder(id).subscribe((d) => {
        this.fetchOrdersDetails(OId); // Refresh the list
        this.fetchOrders();
      });
    }
  }
  IncreamentQuantity(OrdersDetails:any): void {
    OrdersDetails.Quantity++;
    this.OrderDetailsService.UpdateOrderDetails(OrdersDetails.id,OrdersDetails).subscribe((d) => {
      this.fetchOrdersDetails(OrdersDetails.orderId); // Refresh the list
      this.fetchOrders();

    }); 
  }
  
  DecreamentQuantity(OrdersDetails:any): void {
    OrdersDetails.Quantity--;
    this.OrderDetailsService.UpdateOrderDetails(OrdersDetails.id,OrdersDetails).subscribe((d) => {
      this.fetchOrdersDetails(OrdersDetails.orderId); // Refresh the list
      this.fetchOrders();
    }); 
  }

}

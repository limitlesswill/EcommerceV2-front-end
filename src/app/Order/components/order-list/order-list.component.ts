import { OrderDetailsService } from './../../Service/order-details.service';
import { OrderService } from '../../Service/order.service';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Order, OrderDetails } from '../../models/order/order.module';


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
  payOrder(Order:Order): void {
    Order.state=1;
    this.OrderService.UpdateOrder(Order.id,Order).subscribe((d) => {
    this.fetchOrders();});
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
  IncreamentQuantity(OrdersDetails:OrderDetails): void {
    OrdersDetails.quantity++;
    this.OrderDetailsService.UpdateOrderDetails(OrdersDetails.id,OrdersDetails).subscribe((d) => {
      this.fetchOrdersDetails(OrdersDetails.orderId); // Refresh the list
      this.fetchOrders();

    }); 
  }
  back(): void {
    this.OrdersDetails=[];
  }
  DecreamentQuantity(OrdersDetails:OrderDetails): void {
    OrdersDetails.quantity--;
    this.OrderDetailsService.UpdateOrderDetails(OrdersDetails.id,OrdersDetails).subscribe((d) => {
      this.fetchOrdersDetails(OrdersDetails.orderId); // Refresh the list
      this.fetchOrders();
    }); 
  }

}
